import { newE2EPage } from '@stencil/core/testing';

describe('heading-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<heading-component></heading-component>');

    const element = await page.find('heading-component');
    expect(element).toHaveClass('hydrated');
  });
});
