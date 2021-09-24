import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    async addUser (username: string, password : string): Promise<any> {
        let user = new User();
        user.username = username;
        user.password = password;
        return this.userRepository.save(user);
    }
    async getUserList():Promise<User[]>{
        return this.userRepository.find();
    }
    async deleteUser(username: string,password: string):Promise<any>{
        var theOne = await this.userRepository.findOne({username: username, password: password});
        return this.userRepository.remove(theOne);
    }
    async findOne(username: string): Promise<User> {
        return this.userRepository.findOne({username : username});
    }
}