import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('empresas')
export class EmpresaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  cnpj: string;
  
  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  telefone: string;

  @Column()
  quantidadeVagasMotos: number;

  @Column()
  quantidadeVagasCarros: number;

}