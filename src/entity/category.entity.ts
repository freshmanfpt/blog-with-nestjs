import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
}