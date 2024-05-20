import { Router } from 'express';
import { createTodo, getAllTodos, getTodosByLabel, updateTodo } from '../services/todoService';

const router = Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/label/:label',getTodosByLabel);
router.put('/:id', updateTodo);


export default router;