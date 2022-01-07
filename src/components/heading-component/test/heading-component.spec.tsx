import { newSpecPage } from '@stencil/core/testing';
import { HeadingComponent } from '../heading-component';

describe('heading-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadingComponent],
      html: `<heading-component></heading-component>`,
    });
    expect(page.root).toEqualHtml(`
      <heading-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </heading-component>
    `);
  });
});
