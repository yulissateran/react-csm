// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { MOCK_STORAGE } from '__mocks__/storage.mock';

const originalSessionStorage = window.localStorage;

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: MOCK_STORAGE,
  });
});

beforeEach(() => {
  jest.clearAllMocks();
  MOCK_STORAGE.clear();
});

afterAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: originalSessionStorage,
  });
});
