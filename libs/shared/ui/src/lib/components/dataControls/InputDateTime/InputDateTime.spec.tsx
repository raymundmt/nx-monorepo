import { render } from '@testing-library/react';

import InputDateTime from './InputDateTime';

describe('InputDateTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputDateTime />);
    expect(baseElement).toBeTruthy();
  });
});
