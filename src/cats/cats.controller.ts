import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}
    @Get()
    findAll() {
        return this.catsService.findAll()
    }

    @Get(':id')
    findeOne(@Param('id')id: string):string{
        return `This action returns a #${id} cat`
    }
    @Post()
    create(@Body() CreateCatDto: CreateCatDto){
        return this.catsService.create(CreateCatDto)
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() CreateCatDto:CreateCatDto){
        return `This action updates a #${id} cat`
    }
    
    @Delete(':id')
    remove(@Param('id')id:string){
        return `This action removes a #${id} cat`
    }
}
