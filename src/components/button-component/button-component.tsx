import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: false,
})
export class ButtonComponent {
  /**
   * The button types
   */
  @Prop()
  bstyle: 'primary' | 'secondary' | 'ghost' = 'primary';

  /**
   * The active status
   */
  @Prop()
  active: boolean;

  /**
   * The disabled status
   */
   @Prop()
   disabled: boolean;
  
  /**
   * The text label of the button
   */
  @Prop()
  label: string = 'Click';
  /**
   * The icon
   */
  @Prop()
  icon: string;

  @Event() onClick: EventEmitter;
  clickHandler(e: MouseEvent) {
    this.onClick.emit(e);
  }

  render() {  
    return (
      <button
        type="button"
        class={`btn ${this.bstyle} ${this.active ? 'active' : ''}`}
        disabled={this.disabled}   
        title={this.label}
        onClick={(e) => this.clickHandler(e)}
      >
        {this.icon}
        <slot>Save</slot>
      </button>
    );
  }
}
