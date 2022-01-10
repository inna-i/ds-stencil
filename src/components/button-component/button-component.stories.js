import { html } from 'lit-html';

export default {
    title: 'Button',
}

const buttonView = ({ bstyle, active = false, disabled, label, icon }) => html`
    <button-component
        bstyle="${bstyle}"
        active="${active}"
        disabled="${disabled}"
        label="${label}"
        icon="${icon}"
    >
        ${label}
    </button-component>
`;

const buttons = (type, config) => {
    const btns = [];

    config.map(c => {
        btns.push(html`${buttonView(c)}`)
    });

    return btns;
}

const Template = ({ bstyle, disabled, label, types }) => {
    
    if (types) {
        const items = [];

        for (const type in types) {
            items.push(
                html`<section>
                    <h5 style="font-family: sans-serif">${type.toUpperCase()}</h5>
                    ${buttons(type, types[type])}
                <section>`
            );
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
    types: {
        primary: [{
            bstyle: 'primary',
            disabled: false,
            label: 'Primary',
        }, {
            bstyle: 'primary',
            disabled: false,
            icon: '▽',
            label: 'Primary',
        }, { 
            bstyle: 'primary',
            disabled: false,
            active: true,
            label: 'Active',
        }, { 
            bstyle: 'primary',
            disabled: true,
            label: 'Disabled',
        }],
        secondary: [{
            bstyle: 'secondary',
            disabled: false,
            label: 'Secondary',
        }, {
            bstyle: 'secondary',
            disabled: false,
            icon: '▽',
            label: 'Secondary',
        }, {
            bstyle: 'secondary',
            disabled: false,
            active: true,
            label: 'Active',
        }, {
            bstyle: 'secondary',
            disabled: true,
            label: 'Disabled',
        }], 
        ghost: [{
            bstyle: 'ghost',
            disabled: false,
            label: 'Ghost',
        }, {
            bstyle: 'ghost',
            disabled: false,
            icon: '▽',
            label: 'Ghost',
        }, {
            bstyle: 'ghost',
            disabled: false,
            active: true,
            label: 'Active',
        }, {
            bstyle: 'ghost',
            disabled: true,
            label: 'Disabled',
        }],
    }
};
export const Primary = Template.bind({});
Primary.args = {
    bstyle: 'primary',
    disabled: false,
    label: 'Primary'
};
