import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'link-component',
  styleUrl: 'link-component.scss',
  shadow: true,
})
export class Link {
  /**
   * The active status
  */
   @Prop() active: boolean;

    /**
    * The disabled status
    */
    @Prop() disabled: boolean; 
    
    /**
    * The text label of the button
    */
    @Prop() label: string = 'Link';


  render() {
    return (
      <a
        class="link-component"
        title={this.label}    
      >
        <slot>Link</slot>
      </a>
    );
  }

}
