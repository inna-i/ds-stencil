import { html } from 'lit-html';

export default {
    title: 'Button',
}

const buttonView = ({ bstyle, disabled, label }) => html`
    <button-component
        bstyle="${bstyle}"
        disabled="${disabled}"
        label="${label}"
    >
        ${bstyle}
    </button-component>
`;

const Template = ({ bstyle, disabled, label, types = []}) => {
    
    if (types.length > 0) {
        const items = [];
        for (const type of types) {
            items.push(html`<p>${buttonView(type)}<p>`);
        }

        return html`
        <p>
            ${items}
        </p>
        `;
    }

    return html`${buttonView({ bstyle, disabled, label })}`;
}

export const Buttons = Template.bind({});
Buttons.args = {
    types: [
        {
        bstyle: 'primary',
        disabled: false,
        label: 'Primary',
    }, {
        bstyle: 'secondary',
        disabled: false,
        label: 'secondary',
    }, {
        bstyle: 'ghost',
        disabled: false,
        label: 'Ghost',
    }
    ]
};
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    bstyle: 'primary',
    disabled: false,
    label: 'Primary'
};
