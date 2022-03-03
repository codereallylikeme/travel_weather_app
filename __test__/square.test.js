import {square} from '../src/client/js/square';


test('square 3 * 3 to equal 9', () => {
  expect(square(3, 3)).toBe(9);
});
