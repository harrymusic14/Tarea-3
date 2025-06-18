// src/types/express/index.d.ts
import { UserEntity } from '../../models/user.entity'

declare namespace Express {
  export interface Request {
    user?: Partial<UserEntity>
  }
}
