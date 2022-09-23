import ErrorRepository from '../src/ErrorRepository';

test.each([
  [404, 'Not Found!'],
  [502, 'Bad Gateway!'],
  [2402, 'Huge Error!'],
  [1234, 'Some other error!'],
])('should work correctly with given error codes', (errorID, expected) => {
  const repository = new ErrorRepository();
  expect(repository.translate(errorID)).toBe(expected);
});

test('should return unknown error for invalid error code', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(1)).toBe('Unknown Error');
});
