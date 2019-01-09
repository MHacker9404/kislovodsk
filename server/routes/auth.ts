import * as express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login');
});

router.get('/', (req, res) => {
  res.redirect('login');
});

export default router;
