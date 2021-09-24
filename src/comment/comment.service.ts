import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Comment } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ){}
    async addComment(paragraph: string,username:string,blogId:number) : Promise<any> {
        let comment = new Comment();
        comment.paragraph = paragraph;
        this.userRepository.findOne({username : username})
        .then(result => {
            if(result){
                comment.user = result;
            }else{
                comment.user = new User();
                comment.user.username = username;
            }
        }).catch(error => {})
        this.blogRepository.findOne({id : blogId}).then(result => {
            if(result){
                comment.blog = result;
            }else{
                comment.blog = new Blog();
                comment.blog.id = blogId;
            }
        }).catch(error => {})
        return this.commentRepository.save(comment);
    }
    
    async getCommentList(): Promise<Comment[]>{
        return this.commentRepository.find();
    }
    async deleteBlog(id: number):Promise<any>{
        var theOne = await this.commentRepository.findOne({id: id});
        return this.commentRepository.remove(theOne);
    }
    async findOne(id: number): Promise<Comment> {
        return this.commentRepository.findOne({id : id});
    }
}