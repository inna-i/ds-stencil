import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: false,
})
export class ButtonComponent {
  /**
   * The button types
   */
  @Prop() bstyle: 'primary' | 'secondary' | 'ghost' = 'primary';

  /**
   * The active status
   */
  @Prop() active: boolean;

  /**
   * The disabled status
   */
   @Prop()
   disabled: boolean;
  
  /**
   * The text label of the button
   */
  @Prop() label: string = 'Click';

  
  render() {
    return (
      <button
        type="button"
        class={`btn ${this.bstyle}`}
        disabled={this.disabled}   
        title={this.label}    
      >
        <slot>Save</slot>
      </button>
    );
  }
}
