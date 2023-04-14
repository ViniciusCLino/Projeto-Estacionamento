import { EntityRepository, Repository } from "typeorm";
import { EmpresaEntity } from "../database/entities/empresa.entity";

@EntityRepository(EmpresaEntity)
export class EmpresaRepository extends Repository<EmpresaEntity> {

}