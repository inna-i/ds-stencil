import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'subheading-component',
  styleUrl: 'subheading-component.scss',
  shadow: true,
})
export class SubheadingComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
