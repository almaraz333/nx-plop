import { render } from '@testing-library/react';

import { Test4 } from './Test4';

describe('Test4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test4 />);
    expect(baseElement).toBeTruthy();
  });
});
