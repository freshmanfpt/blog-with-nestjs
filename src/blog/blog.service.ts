import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { Blog } from 'src/entity/blog.entity';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ){}
    async addBlog(title: string,date:Date,paragraph:string,name:string,category:string): Promise<any> {
        let blog = new Blog();
        blog.title= title;
        blog.date= date;
        blog.paragraph  = paragraph;
        this.adminRepository.findOne({name:name})
        .then((result) => {
            if(result){
                // console.log(result);
                blog.admin = result;
                // console.log(blog.admin);
            }else{
                blog.admin = new Admin();
                blog.admin.name = name;
            }
        }).catch((error) => {});
        this.categoryRepository.findOne({description:category})
        .then((result) => {
            if(result) {
                // console.log(result);
                blog.category = result;
            }else{
                blog.category = new Category();
                blog.category.description = category;
            }
        }).catch((error) => {});
        return this.blogRepository.save(blog);
    }
    async getBlogList(): Promise<Blog[]>{
        return this.blogRepository.find();
    }
    async deleteBlog(id: number):Promise<any>{
        var theOne = await this.blogRepository.findOne({id: id});
        return this.blogRepository.remove(theOne);
    }
    async findOne(id: number): Promise<Blog> {
        return this.blogRepository.findOne({id : id});
    }
}