import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { UserEntity } from './user.entity'

@Entity('pet_posts')
export class PetPostEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  title!: string

  @Column()
  description!: string

  @Column()
  location!: string

  @Column({ default: false })
  isApproved!: boolean

  @ManyToOne(() => UserEntity, user => user.petPosts)
  @JoinColumn({ name: 'userId' })
  user!: UserEntity
}
