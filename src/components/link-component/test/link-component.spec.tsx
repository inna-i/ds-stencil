import { newSpecPage } from '@stencil/core/testing';
import { LinkComponent } from '../link-component';

describe('link-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LinkComponent],
      html: `<link-component></link-component>`,
    });
    expect(page.root).toEqualHtml(`
      <link-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </link-component>
    `);
  });
});
