import { newSpecPage } from '@stencil/core/testing';
import { TutorialTips } from '../tips-component';

describe('tips-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TutorialTips],
      html: `<tips-component></tips-component>`,
    });
    expect(page.root).toEqualHtml(`
      <tips-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tips-component>
    `);
  });
});
