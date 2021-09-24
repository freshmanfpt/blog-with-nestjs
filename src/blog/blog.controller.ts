import { Body, Controller, Get, Post } from "@nestjs/common";
import { BlogService } from "./blog.service";
@Controller("blog")
export class BlogController{
    constructor(private readonly blogService: BlogService){}
    @Get("list")
    async getBlogList()
    {
        return this.blogService.getBlogList().catch((error) => {
            return error;
        })
    }
    @Post("add")
    async addBlog(
        @Body("title")   title: string,
        @Body("paragraph")   paragraph: string,
        @Body("name")   name: string,
        @Body("category")   category: string,
    ){
        let realDate = new Date();
        return this.blogService.addBlog(title,realDate,paragraph,name,category).catch(error=>{
            return error;
        })
    }
    @Post("remove")
    async removeCategory(
        @Body("id")   id: number,
    ){
        return this.blogService.deleteBlog(id).catch(error=>{
            return error;
        })
    }
    @Post('find')
    async findUser(
        @Body("id")   id: number,
    ){
        return this.blogService.findOne(id).catch(error => {
            return error;
        })
    }
}