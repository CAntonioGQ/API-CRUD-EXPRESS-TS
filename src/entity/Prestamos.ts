import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity()
  export class Prestamos {
    @PrimaryGeneratedColumn()
    idPrestamos!: number;
  
    @Column()
    nombreCliente!: string;
  
    @Column()
    monto!: string;

    @Column()
    plazo!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }