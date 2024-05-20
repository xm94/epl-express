import { Router } from 'express';
import { deleteProduct, getProducts, insertProduct, updateProduct } from '../services/productService';

const router = Router();

router.get('/',getProducts);
router.post('/', insertProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct);

export default router;