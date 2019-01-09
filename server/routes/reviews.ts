import * as express from 'express';
const router = express.Router();
import {all} from '../controllers/reviews';

router.get('/', (req, res) => {
  all().subscribe(d => {
    res.send(d);
  });
});

router.get('/:id', (req, res) => {
  res.redirect('login');
});

export default router;
