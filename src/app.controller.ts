// import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
// import { AppService } from './app.service';
// import { RequestDTO } from './request.dto';
// import { ApiBody } from '@nestjs/swagger';

// @Controller('todos')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('/findall')
//   getTodos(): string[] {
//     return this.appService.getTodos(); // Fetch todos
//   }

//   @Post('/create')
//   @ApiBody({ schema: new RequestDTO() })
//   addTodo(@Body('name') todo: string): string {
//     console.log(todo);
//     this.appService.addTodo(todo);
//     return `Todo '${todo}' added successfully!`;
//   }

//   @Put('/update/:index')
//   @ApiBody({ schema: new RequestDTO() })
//   updateTodo(
//     @Param('index', ParseIntPipe) index: number,
//     @Body('newTodo') newTodo: string
//   ): string {
//     this.appService.updateTodo(index, newTodo);
//     return `Todo at index ${index} updated to '${newTodo}'`;
//   }


//   @Get('/find-by/:index')
//   getTodoByIndex(@Param('index', ParseIntPipe) index: number): string {
//     return this.appService.getTodoByIndex(index);
//   }

//   @Delete('/delete/:index')
//   deleteTodo(@Param('index', ParseIntPipe) index: number): string {
//     this.appService.deleteTodo(index);
//     return `Todo at index ${index} deleted successfully!`;
//   }

// }
