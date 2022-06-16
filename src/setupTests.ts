import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import { server } from './tests/mocks/server';
// Need to import "whatwg-fetch" to polyfill the Fetch API since tests are run in node environment (CRA's config usually takes care of that)
import 'whatwg-fetch';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// Turn off network error logging
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
