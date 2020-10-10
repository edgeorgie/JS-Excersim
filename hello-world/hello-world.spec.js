import HelloWorld from './hello-world';

describe('Hello World', () => {
  const there = new HelloWorld()

  test('Say Hi!', () => {
    expect(there.hello()).toEqual('Hello, World!');
  });
});
