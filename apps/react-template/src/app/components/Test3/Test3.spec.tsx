import { render } from '@testing-library/react';

import { Test3 } from './Test3';

describe('Test3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test3 />);
    expect(baseElement).toBeTruthy();
  });
});
