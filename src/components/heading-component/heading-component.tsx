import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'heading-component',
  styleUrl: 'heading-component.scss',
  shadow: true,
})
export class HeadingComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
