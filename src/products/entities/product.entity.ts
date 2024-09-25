import { Entity, PrimaryGeneratedColumn, Column,   } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    details: string;

    @Column()
    category: string;

    @Column('float')
    price: number;

    @Column()
    available: boolean;
}