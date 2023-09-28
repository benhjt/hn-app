import { render } from '@testing-library/react';
import Separator from './Separator';

describe('Separator', () => {
  it('renders correctly', () => {
    const { container } = render(<Separator />);
    expect(container).toMatchSnapshot();
  });
});
