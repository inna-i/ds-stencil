import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: false,
})
export class AccordionComponent {
  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() label: string;

  @Prop() description: string;

  @Prop() color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div class="accordion-component">
        <button
          class="accordion-btn"
          onClick={() => this.toggleComponent()}
        >
          {this.toggle ? <span class="accordion-arrow">&#709;</span> : <span class="accordion-arrow">&#707;</span>}
          {this.label}
        </button>
        <div class={`accordion-content ${this.toggle ? 'open' : 'close'}`}>
          {this.description
            ? <p>{this.description}</p>
            : <slot></slot>
          }
        </div>
      </div>
    );
  }
}
