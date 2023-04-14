import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carros')
export class CarroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;
  
  @Column()
  modelo: string;

  @Column()
  cor: string;

  @Column()
  placa: string;

  @Column()
  tipo: string;

}