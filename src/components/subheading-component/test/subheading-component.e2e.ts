import { newE2EPage } from '@stencil/core/testing';

describe('subheading-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<subheading-component></subheading-component>');

    const element = await page.find('subheading-component');
    expect(element).toHaveClass('hydrated');
  });
});
