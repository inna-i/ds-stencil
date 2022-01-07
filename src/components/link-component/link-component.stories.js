import { html } from 'lit-html';

export default {
  title: 'Links',
};

const linkView = ({ active, disabled, href, icon, label }) => html`
  <link-component
    label="${label}"
    active="${active}"
    disabled="${disabled}"
    href="${href}"
    icon="${icon}"
  >
    ${label}
  </link-component>
`;

const Template = ({ active, disabled, label, types = []}) => {
    
    if (types.length > 0) {
        const items = [];
        for (const type of types) {
            items.push(html`<p>${linkView(type)}<p>`);
        }

        return html`
        <p>
            ${items}
        </p>
        `;
    }

    return html`${linkView({ active, disabled, label })}`;
}

export const Links = Template.bind({});
Links.args = {
    types: [{
      active: false,
      disabled: false,
      label: 'Primary',
      icon: '➔',
      href: 'https://google.com',
    }, {
      active: true,
      disabled: false,
      label: 'Ghost',
    }]
};
export const DefaultLink = Template.bind({});
DefaultLink.args = {
    active: false,
    disabled: false,
    label: 'Primary'
};
