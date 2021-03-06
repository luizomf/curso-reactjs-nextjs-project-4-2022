import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    srcImg: '/assets/images/javascript.svg',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
