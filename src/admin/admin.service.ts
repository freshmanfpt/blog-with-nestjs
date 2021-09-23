import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Admin} from '../entity/admin.entity'
@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRespository: Repository<Admin>,
    ){}
    async addAdmin(name : string, password: string,permission:number):Promise<any> {
        let admin = new Admin();
        admin.name = name;
        admin.password = password;
        admin.permission = permission;
        return this.adminRespository.save(admin);
    }
    async getAdminList():Promise<Admin[]>{
        return this.adminRespository.find();
    }
    async deleteAdmin(name: string,password: string):Promise<any>{
        var theOne = await this.adminRespository.findOne({name: name, password: password});
        return this.adminRespository.remove(theOne);
    }
}
