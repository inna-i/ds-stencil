import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'tips-component',
  styleUrl: 'tips-component.scss',
  shadow: false,
})
export class TipsComponent {
  @Prop() actions: any;
  @Prop() heading: string;
  @Prop() subHeading: string;
  @Prop() position: string;
  @Prop() backLabel: string;
  @Prop() acceptLabel: string;

  /** The back action to redirect */
  @Event() back: EventEmitter;
  @Event() accept: EventEmitter;


  render() {
    return (
      <div class={`tips-component ${this.position}`}>
          {this.subHeading && <h6>{this.subHeading}</h6>}
          <h4 class="sub-h1">{this.heading}</h4>
          <div class="tips-component-controls">
              <link-component label={this.backLabel} icon="➔" />
              <button-component label={this.acceptLabel} />
          </div>
      </div>
    );
  }
  
}

// {/* <Link label={this.backLabel} click={this.back} bsType="ghost" icon="➔"/> */}