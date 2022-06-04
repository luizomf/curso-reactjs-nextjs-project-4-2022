import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
Lorem ipsum, *dolor* sit **amet** consectetur [link to google](https://www.google.com.br). Adipisicing
elit. Nihil, iure quaerat! Voluptates ducimus exercitationem,

## Title

reprehenderit laborum, libero cum porro necessitatibus sint incidunt,
praesentium ipsa quaerat debitis delectus nemo aliquid! Facere.
      `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
);
