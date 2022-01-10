import { html } from 'lit-html';
import colorTokens from '../config/color-design-tokens';

export default {
    title: 'Color',
}

const colorItem = (colorKey, rgbValue) => html`
    <div class="color-list-item">
        <div class="color-block" style="background-color: ${rgbValue}; ${colorKey === 'white' ? 'border: 1px solid silver' : ''}">
            ${colorKey}
        </div>
        <div class="descr">
            ${rgbValue}
        </div>
    </div>`;

const colorsList = (colors, config) => {
    const cols = [];

    for (const colorKey of colors) {
        cols.push(colorItem(colorKey, config[colorKey].value));
    }

    return html`${cols}`;
}

const colorRows = (colors, config) => {
    const rows = [];

    for (const colorKey of colors) {
        rows.push(html`
            <div class="color-row">
                <h6>${colorKey}</h6>
                <div class="colors-list">
                    ${colorsList(Object.keys(config[colorKey]), config[colorKey])}
                </div>
            </div>`
        );
    }

    return html`${rows}`;
}

const colorSection = (color, config) => {
    console.log(color, '   ', config);

    const rows = config.value
        ? colorItem(color, config.value)
        : colorRows(Object.keys(config), config);

    return html`
        <section class="colors">
            <h4>${color}</h4>
            ${rows}
        </section>
    `;
};

const Template = ({ colors = []}) => {
    const items = [];

    for (const color of colors) {
        items.push(html`${colorSection(color, colorTokens[color])}`);
    }

    return html`
        <style>
            .colors {
                margin-bottom: 55px;
                font-family: sans-serif;
            }
            .color-row {
                margin-bottom: 25px;
            }
            h4, h6 {
                text-align: left;
            }
            h4 {
                margin: 15px 0 10px;
                text-transform: uppercase;
            }
            h6 {
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .colors-list {
                display: flex;
                flex-direction: row;
                justify-content: stretch;
            }
            .color-list-item {
                color: #000;
            }
            .color-list-item:nth-child(n+7) .color-block {
                color: white;
            }
            .color-block {
                padding: 30px;
                margin-bottom: 5px;
                max-width: 65px;
                text-align: center;
                border-right: 1px solid white;
            }
            .descr {
                font-size: 12px;
            }
        </style>
        ${items}`;
}

export const Colors = Template.bind({});
Colors.args = {
    colors: Object.keys(colorTokens),
};
