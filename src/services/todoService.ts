import { Request, Response } from 'express';
import Todo from '../models/todo';

// In-memory array to store posts
let todos: Todo[] = [];
let currentId = todos.length+1;

export const getAllTodos = (req: Request, res: Response) => {
  return res.status(200).json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const { task, label } = req.body;
  if(!task || !label){
    return res.status(400).send("Bad Request, missing fields");
  }
  const newPost: Todo = { id: currentId++, task, label};
  todos.push(newPost);
  return res.status(201).json(newPost);
};


export const getTodosByLabel = (req: Request, res: Response) => {
    const label = req.params.label;
    let labeledTodos = []
    for(let i=0;i<todos.length;i++){
        if(todos[i].label == label){
            labeledTodos.push(todos[i]);
        }
    }
    return res.status(200).json(labeledTodos);
}

export const updateTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let todoIndex:number = -1;
    for(let i=0;i<todos.length;i++){
        if(todos[i].id == id){
            todoIndex = i;
                }
    }
    if(todoIndex == -1){
        return res.status(404).send("Not Found")
    }
    const { task, label } = req.body;
    todos[todoIndex] = {id:id,task: task,label: label}
    
    return res.status(200).json(todos[todoIndex]);


}
