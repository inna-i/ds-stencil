import { html } from 'lit-html';
import { Neutral, Red } from './colorsConfig';

export default {
    title: 'Color',
}

const colorsRow = (colors, config) => {
    const cols = [];

    for (const colorKey of colors) {
        cols.push(html`
            <div class="color-list-item">
                <div class="color-block" style="background-color: ${config[colorKey].hex}">
                    ${colorKey}
                </div>
                <div class="descr">
                    ${config[colorKey].hex}
                </div>
            </div>`
        );
    }

    return html`${cols}`;

}

const colorView = ({ colorConfig, colorType, colorKeys }) => {
    return html`
        <style>
            .color-row {
                margin-bottom: 25px;
                font-family: sans-serif;
            }
            
            h4, h6 {
                font-family: sans-serif;
                text-align: left;
            }
        
            h4 {
                margin-bottom: 15px;
            }
        
            .colors-list {
                display: flex;
                flex-direction: row;
                justify-content: stretch;
            }
        
            .color-list-item {
                color: #000;
            }
            
            .color-block {
                padding: 30px;
            }
        
            .descr {
                font-size: 12px;
            }
        </style>
        <section>
            <h4>${colorType}</h4>
            <div class="color-row">
                <h6>${colorKeys[0]}</h6>
                <div class="colors-list">
                    ${colorsRow(Object.keys(colorConfig[colorKeys[0]]), colorConfig[colorKeys[0]])}
                </div>
            </div>
            <div class="color-row">
                <h6>${colorKeys[1]}</h6>
                <div class="colors-list">
                    ${colorsRow(Object.keys(colorConfig[colorKeys[1]]), colorConfig[colorKeys[1]])}
                </div>
            </div>
        </section>
    `;
};

const Template = ({ types = []}) => {
    const items = [];

    for (const type of types) {
        items.push(html`${colorView(type)}`);
    }

    return html`
        <section>
            ${items}
        </section>
    `;

}

export const Colors = Template.bind({});
Colors.args = {
    types: [
        {
        colorConfig: Neutral,
        colorType: 'Neutral',
        colorKeys: ['PureGray', 'ColdGray'],
    }, {
        colorConfig: Red,
        colorType: 'Red',
        colorKeys: ['MainRed', 'CrimsonRed'],
    }]
};
