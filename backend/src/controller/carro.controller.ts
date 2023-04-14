import { Router, Response, Request } from "express";
import { CarroEntity } from "../database/entities/carro.entity";
import { CarroService } from "../services/carro.service";

export class CarroController {
  public router: Router;
  private carroService: CarroService; 

  constructor(){
    this.carroService = new CarroService(); 
    this.router = Router();
    this.routes();
  }

  public find = async (req: Request, res: Response) => {
    const carros = await this.carroService.find();
    res.send(carros);
  } 

  public findById = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    const carros = await this.carroService.findById(Number(id));
    res.send(carros);
  } 

  public create = async (req: Request, res: Response) => {
    const carro = req['body'] as CarroEntity;
    const newCarro = await this.carroService.create(carro);
    res.send(newCarro);
  }

  public update = async (req: Request, res: Response) => {
    const carro = req['body'] as CarroEntity;
    const id =  req['params']['id'];
    
    res.send(this.carroService.update(carro, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.carroService.delete(Number(id)));
  } 

  /**
   * Configure the routes of controller
   */
  public routes(){
    this.router.get('/', this.find);
    this.router.get('/:id', this.findById);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}