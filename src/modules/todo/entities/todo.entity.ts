import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ToDo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    title:string;

    @Column("text")
    content: string;

    @Column()
    isCompleted: boolean;
}
