import { newE2EPage } from '@stencil/core/testing';

describe('link-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-component></link-component>');

    const element = await page.find('link-component');
    expect(element).toHaveClass('hydrated');
  });
});
