import { html } from 'lit-html';

export default {
  title: 'Accordion',
};

const Template = ({ color, label, description, customContent }) => {
  if (customContent) {
    return  html`
      <accordion-component
        width='100%' 
        label="${label}"
        color="${color}"
        description="${description}"
      >
        ${customContent}
      </accordion-component>
    `;
  }

  return html`
    <accordion-component
      width='100%' 
      label="${label}"
      color="${color}"
      description="${description}"
    />
  `;
}

export const Simple = Template.bind({});
Simple.args = {
  label: 'Bacon Ipsum',
  color: 'pink',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit lacus, aliquam sed ante eget, suscipit pellentesque orci. Sed mollis libero a elementum mollis. In vitae pharetra enim. In hac habitasse platea dictumst. Donec facilisis, eros eu consequat feugiat, lectus justo luctus leo, elementum hendrerit metus lacus sed sapien. Aliquam faucibus, tellus ac egestas convallis, sem nisi ullamcorper ex, nec sodales mauris quam in nunc. Donec in urna diam.",
};

export const CusomContent = Template.bind({});
CusomContent.args = {
  label: 'Bacon Ipsum',
  color: 'pink',
  // description: " Aliquam faucibus, tellus ac egestas convallis, sem nisi ullamcorper ex, nec sodales mauris quam in nunc. Donec in urna diam.",
  customContent: html`
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit lacus, aliquam sed ante eget, suscipit pellentesque orci. Sed mollis libero a elementum mollis. In vitae pharetra enim. In hac habitasse platea dictumst. Donec facilisis, eros eu consequat feugiat, lectus justo luctus leo, elementum hendrerit metus lacus sed sapien.</p>
      <p>And more extra content...</p>
      <h3>Some title</h3>
    </div>
  `,
};

