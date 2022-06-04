import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import { vi } from 'vitest';

import mock from './mock';

vi.mock('next/image', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line
    default: ({ src, alt }) => <img src={src} alt={alt} />,
  };
});

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
