import { newE2EPage } from '@stencil/core/testing';

describe('tips-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tips-component></tips-component>');

    const element = await page.find('tips-component');
    expect(element).toHaveClass('hydrated');
  });
});
