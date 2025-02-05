// import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';


// @Injectable()
// export class AppService {
//   private Todoapp: string[] = [];
//   getHello(): string {
//     return 'Hello World!';
//   }

//   getTodos(): string[] {
//     return this.Todoapp;
//   }

//   addTodo(todo: string): void {
//     this.Todoapp.push(todo);
//   }

//   updateTodo(index: number, newTodo: string): void {
//     if (index < 0 || index >= this.Todoapp.length) {
//       throw new NotFoundException(`Todo at index ${index} not found`);
//     }
//     this.Todoapp[index] = newTodo;
//   }

//   getTodoByIndex(index: number): string {
//     if (index < 0 || index >= this.Todoapp.length) {
//       throw new NotFoundException(`Todo at index ${index} not found`);
//     }
//     return this.Todoapp[index];
//   }

//   deleteTodo(index: number): void {
//     if (index < 0 || index >= this.Todoapp.length) {
//       throw new NotFoundException(`Todo at index ${index} not found`);
//     }
//     this.Todoapp.splice(index, 1); // Removes the todo at the given index
//   }

// }
