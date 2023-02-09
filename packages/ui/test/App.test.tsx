import { render, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import App from '../src/App';

describe('App', (): void => {
  afterEach(cleanup);
  it('should render', (): void => {
    render(<App />);
  });

  it('should render Login', () => {
    render(<App />);
    screen.getByText('Login to Chattot');
  });
});
