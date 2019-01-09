import {config} from 'dotenv';
import * as express from 'express';
import auth from './routes/auth';
import reviews from './routes/reviews';

config();

const app = express();

app.use('/auth', auth);
app.use('/reviews', reviews);

app.listen(100, () => {console.log(`listening on port ${process.env.PORT}`); });
