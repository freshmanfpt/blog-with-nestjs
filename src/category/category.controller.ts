import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
@Controller("category")
export class CategoryController{
    constructor(private readonly categoryService :CategoryService ){}
    @Post("add")
    async addCategory(
        @Body("description")   description: string,
    ){
      return this.categoryService.addCategory(description).catch(error=>{
          return error;
      });
    }
    @Post("remove")
    async removeCategory(
        @Body("id")   id: number,
    ){
        return this.categoryService.deleteCategory(id).catch(error=>{
            return error;
        })
    }
    @Post('find')
    async findUser(
        @Body("id")   id: number,
    ){
        return this.categoryService.findOne(id).catch(error => {
            return error;
        })
    }
    @Get("list")
    async getList(){
        return this.categoryService.getCategoryList().catch(error => {
            return error;
        })
    }
}