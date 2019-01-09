import { Observable, from } from 'rxjs';
import {delay} from 'rxjs/operators';

function all(): Observable<string> {
 return from(Promise.resolve('reviews'));
}

export {
  all
};
