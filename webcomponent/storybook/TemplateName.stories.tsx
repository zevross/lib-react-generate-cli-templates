import {Meta, Story} from "@storybook/react/types-6-0";
import TemplateName, {TemplateNameProps} from './TemplateName';


/**
 * For help with storybook and typescript
 * @ref https://pagepro.co/blog/storybook-configuration-with-cra-and-ts-in-example/
 */
export default {
  component: TemplateName,
  title: "TemplateName",
} as Meta;

const Template: Story<TemplateNameProps> = (
  args: TemplateNameProps
) => <TemplateName {...args} />;

export const Default = () => <TemplateName {...({} as TemplateNameProps)}/>;

Default.args = {
  
} as TemplateNameProps;