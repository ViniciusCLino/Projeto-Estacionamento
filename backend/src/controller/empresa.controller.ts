import { Router, Response, Request } from "express";
import { EmpresaEntity } from "../database/entities/empresa.entity";
import { EmpresaService } from "../services/empresa.service";

export class EmpresaController {
  public router: Router;
  private empresaService: EmpresaService; 

  constructor(){
    this.empresaService = new EmpresaService(); 
    this.router = Router();
    this.routes();
  }

  public find = async (req: Request, res: Response) => {
    const empresas = await this.empresaService.find();
    res.send(empresas);
  } 

  public findById = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    const empresas = await this.empresaService.findById(Number(id));
    res.send(empresas);
  } 

  public create = async (req: Request, res: Response) => {
    const empresa = req['body'] as EmpresaEntity;
    const newEmpresa = await this.empresaService.create(empresa);
    res.send(newEmpresa);
  }

  public update = async (req: Request, res: Response) => {
    const empresa = req['body'] as EmpresaEntity;
    const id =  req['params']['id'];
    
    res.send(this.empresaService.update(empresa, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.empresaService.delete(Number(id)));
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