import {config} from 'dotenv';
import * as staticAngular from 'static-angular';
import * as express from 'express';
import auth from './routes/auth';
import reviews from './routes/reviews';

config();

const app = express();

app.use(staticAngular({path: 'kislovodsk'}));

app.use('/auth', auth);
app.use('/reviews', reviews);

app.listen(process.env.PORT, () => {console.log(`listening on port ${process.env.PORT}`); });
