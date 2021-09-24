import { Body, Controller, Get, Post } from "@nestjs/common";
import { Admin } from "../entity/admin.entity";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService : AdminService){}

    @Post("remove")
    async deleteAdmin(
        @Body("name")   name: string,
        @Body("password")  password: string ,
    ){
        return this.adminService.deleteAdmin(name, password).catch(error => {
            return error;
        });
    }

    @Post("add")
    async addAdmin(
        @Body("name")   name: string,
        @Body("password")  password: string ,
        @Body("permission") permission: number,
    ){  
        return this.adminService.addAdmin(name, password, permission).catch(error => {
            return error;
        });

    }
    @Post("find")
    async findAdmin(
        @Body("name") name: string,
    ){
        return this.adminService.findOne(name).catch(error => {
            return error;
        })
    }
    @Get("list")
    async getList(){
        return this.adminService.getAdminList().catch(error => {
            return error;
        })
    }
}