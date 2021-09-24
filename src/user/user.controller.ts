import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post("add")
    async addUser(
        @Body("username")   name: string,
        @Body("password")  password: string ,
    ){
        return this.userService.addUser(name, password).catch(error => {
            return error;
        });
    }
    @Post("remove")
    async removeUser(
        @Body("username")   name: string,
        @Body("password")  password: string ,
    ){
        return this.userService.deleteUser(name, password).catch(error => {
            return error;
        });
    }
    @Post('find')
    async findUser(
        @Body("username")   name: string,
    ){
        return this.userService.findOne(name).catch(error => {
            return error;
        })
    }
    @Get("list")
    async getList(){
        return this.userService.getUserList().catch(error => {
            return error;
        })
    }
}