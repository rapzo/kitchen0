import React from 'react';
import { render } from '@testing-library/react';

import Shop from './shop';

describe(' Shop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shop />);
    expect(baseElement).toBeTruthy();
  });
});
