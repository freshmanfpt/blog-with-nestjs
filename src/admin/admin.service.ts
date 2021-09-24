import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Repository } from 'typeorm';
import {Admin} from '../entity/admin.entity'
@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
    ){}
    async addAdmin(name : string, password: string,permission:number):Promise<any> {
        let admin = new Admin();
        admin.name = name;
        admin.password = password;
        admin.permission = permission;
        return this.adminRepository.save(admin);
    }
    async getAdminList():Promise<Admin[]>{
        return this.adminRepository.find();
    }
    async deleteAdmin(name: string,password: string):Promise<any>{
        var theOne = await this.adminRepository.findOne({name: name, password: password});
        return this.adminRepository.remove(theOne);
    }
    async findOne(name: string): Promise<Admin> {
        return this.adminRepository.findOne({name : name});
    }
}
