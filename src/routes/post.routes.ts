import { Router } from 'express';
import { getPosts, createPost, getPost } from '../controllers/post.controller';
const router = Router();

router.route('/')
      .get(getPosts)
      .post(createPost);
      
router.route('/:postId')
      .get(getPost);

export default router;