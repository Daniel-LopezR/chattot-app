import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import Login from '../src/Login';

describe('Login', (): void => {
  afterEach(cleanup);

  it('should render', () => {
    render(<Login />);
  });
  it('should render form', () => {
    render(<Login />);
    screen.getByRole('form');
  });
});
