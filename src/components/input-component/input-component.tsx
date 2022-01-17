import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.scss',
  shadow: true,
})
export class InputComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
