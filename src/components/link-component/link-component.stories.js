import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Links',
};

const Template = ({ label, active, disabled }) => {
  return html`
    <link-component
      label="${label}"
      active="${active}"
      disabled="${disabled}"
    >
    ${label}
    </link-component>
  `;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Here is link',
  active: false,
  disabled: false,
  accept: action('click'),
};
