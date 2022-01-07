import { newSpecPage } from '@stencil/core/testing';
import { SubheadingComponent } from '../subheading-component';

describe('subheading-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubheadingComponent],
      html: `<subheading-component></subheading-component>`,
    });
    expect(page.root).toEqualHtml(`
      <subheading-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </subheading-component>
    `);
  });
});
