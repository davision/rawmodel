import { Spec } from '@hayspec/spec';
import * as validator from '..';

const spec = new Spec();

spec.test('exposed content', (t) => {
  t.true(!!validator.Validator);
});

export default spec;
