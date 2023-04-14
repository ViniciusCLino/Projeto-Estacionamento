import { getConnection } from 'typeorm';
import { CarroEntity } from '../database/entities/carro.entity';
import { CarroRepository } from '../repository/carro.repository';

export class CarroService {
  private carroRepository: CarroRepository;

  constructor(){
    this.carroRepository = getConnection("estacionamento").getCustomRepository(CarroRepository);
  }

  public find = async () => {
    const carros = await this.carroRepository.find()
    return carros;
  } 

  public findById = async (id: number) => {
    const carros = await this.carroRepository.findOne(id)
    return carros;
  } 

  public create = async (carro: CarroEntity) => {
    const newCarro = await this.carroRepository.save(carro);
    return newCarro;
  } 

  public update =  async(carro: CarroEntity, id: number) => {
    const updatedCarro = await this.carroRepository.update(id, carro);
    return updatedCarro;
  } 

  public delete = async (id: number) => {
    const deletedCarro = await this.carroRepository.delete(id);
    return deletedCarro;
  } 
}