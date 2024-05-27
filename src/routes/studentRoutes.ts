import { Router } from 'express';
import { getStudentById, getStudents } from '../services/studentService';

const router = Router();

router.get('/',getStudents);
router.get('/:id',getStudentById);

export default router;