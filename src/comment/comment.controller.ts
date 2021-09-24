import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";
@Controller("comment")
export class CommentController{
    constructor(private readonly commentService :CommentService ){}
    @Post("add")
    async addCategory(
        @Body("paragraph")   paragraph: string,
        @Body("username")   username: string,
        @Body("blogId")   blogId: number,
    ){
      return this.commentService.addComment(paragraph, username, blogId).catch(error=>{
          return error;
      });
    }
    @Post("remove")
    async removeCategory(
        @Body("id")   id: number,
    ){
        return this.commentService.deleteBlog(id).catch(error=>{
            return error;
        })
    }
    @Post('find')
    async findUser(
        @Body("id")   id: number,
    ){
        return this.commentService.findOne(id).catch(error => {
            return error;
        })
    }
    @Get("list")
    async getList(){
        return this.commentService.getCommentList().catch(error => {
            return error;
        })
    }
}