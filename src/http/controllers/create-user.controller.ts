import { Controller, Get, Post } from '@nestjs/common'
// import { MongooseService } from 'src/database/mongoose/mongoose.service'

@Controller('/users')
export class CreateUserController {
  // constructor(private mongoose: MongooseService) {}
  constructor() {}

  // @Get()
  // async handle() {
  //   const result = await this.mongoose.user.find({ name: 'John Doe' })
  //   return JSON.stringify(result)
  // }

  @Get()
  async handle() {
    return JSON.stringify('Hello World!')
  }

  @Post()
  async postHandle() {
    return JSON.stringify('Created!')
  }

  // @Post()
  // async postHandle() {
  //   await this.mongoose.user.create({
  //     name: 'John Doe',
  //     cpf: '111.111.111-11',
  //     password: '123456',
  //     admin: true,
  //   })
  // }
}
