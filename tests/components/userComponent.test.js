const { renderUser, renderUserList } = require('../../src/components/userComponent');

test('renders user name in an h1 tag', () => {
  const result = renderUser('John Doe');
  expect(result).toBe('<h1>John Doe</h1>');
});

test('throws an error if name is not provided', () => {
  expect(() => renderUser()).toThrow('Name is required');
});

test('renders a list of users', () => {
  const users = ['Alice', 'Bob', 'Charlie'];
  const result = renderUserList(users);
  expect(result).toBe('<li>Alice</li><li>Bob</li><li>Charlie</li>');
});
