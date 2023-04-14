import express, {Request, Response} from 'express';
import cors from 'cors';
import { PostController } from './controller/post.controller'; // import the post controller
import { createConnection } from "typeorm";
import { EmpresaController } from './controller/empresa.controller';
import { CarroController } from './controller/carro.controller';

class Server {
  private empresaController: EmpresaController;
  private carroController: CarroController;
  private postController: PostController;
  private app: express.Application;

  constructor(){
    this.app = express(); // init the application
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(express.json());
    this.app.use(cors<Request>());
    this.app.use(this.logErrors)
    this.app.use(this.clientErrorHandler)
    this.app.use(this.errorHandler)
  }

  /**
   * Method to configure the routes
   */
  public async routes(){
    await createConnection({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ["build/database/entities/**/*.js"],
      synchronize: true,
      name: "estacionamento"
    });

    this.postController = new PostController();
    this.empresaController = new EmpresaController();
    this.carroController = new CarroController();

    this.app.get( "/", (req: Request, res: Response ) => {
      res.send( "Hello world!" );
    });

    this.app.use(`/api/posts/`,this.postController.router); 
    this.app.use(`/api/empresa/`,this.empresaController.router);
    this.app.use(`/api/carro/`,this.carroController.router);
  }

  /**
   * Used to start the server
   */
  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }

  private logErrors(err: Error, req: Request, res:Response, next: Function) {
    console.error(err.stack)
    next(err)
  }

  private clientErrorHandler(err: Error, req: Request, res:Response, next: Function) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
  }

  private errorHandler(err: Error, req: Request, res:Response, next: Function) {
    res.status(500)
    res.render('error', { error: err })
  }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server
