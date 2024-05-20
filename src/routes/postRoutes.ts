import { Router } from 'express';
import { getAllPosts, createPost, updatePost, deletePost, getJson } from '../services/postService';

const router = Router();

router.get('/', getAllPosts);
router.get('/json',getJson);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;