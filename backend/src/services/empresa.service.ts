import { getConnection } from 'typeorm';
import { EmpresaEntity } from '../database/entities/empresa.entity';
import { EmpresaRepository } from '../repository/empresa.repository';

export class EmpresaService {
  private empresaRepository: EmpresaRepository;

  constructor(){
    this.empresaRepository = getConnection("estacionamento").getCustomRepository(EmpresaRepository);
  }

  public find = async () => {
    const empresas = await this.empresaRepository.find()
    return empresas;
  } 

  public findById = async (id: number) => {
    const empresas = await this.empresaRepository.findOne(id)
    return empresas;
  } 

  public create = async (empresa: EmpresaEntity) => {
    const newEmpresa = await this.empresaRepository.save(empresa);
    return newEmpresa;
  } 

  public update =  async(empresa: EmpresaEntity, id: number) => {
    const updatedEmpresa = await this.empresaRepository.update(id, empresa);
    return updatedEmpresa;
  } 

  public delete = async (id: number) => {
    const deletedEmpresa = await this.empresaRepository.delete(id);
    return deletedEmpresa;
  } 
}