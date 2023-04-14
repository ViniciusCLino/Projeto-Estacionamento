import { EntityRepository, Repository } from "typeorm";
import { CarroEntity } from "../database/entities/carro.entity";

@EntityRepository(CarroEntity)
export class CarroRepository extends Repository<CarroEntity> {

}