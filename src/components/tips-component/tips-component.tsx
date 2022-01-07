import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
// import { ButtonComponent } from '../button-component/button-component';
// import { Link } from '../link-component/link-component';

@Component({
  tag: 'tips-component',
  styleUrl: 'tips-component.scss',
  shadow: false,
})
export class TipsComponent {
  @Prop() actions: any;
  @Prop() heading: string;
  @Prop() subHeading: string;
  @Prop() tipsPosition: string;
  @Prop() backLabel: string;
  @Prop() acceptLabel: string;

  @Event() back: EventEmitter;
  @Event() accept: EventEmitter;

  // render() {
  //   return (
  //     <div class={`tips-component ${this.tipsPosition}`}>
  //         <h6>{this.subHeading}</h6>
  //         <h4 class="sub-h1">{this.heading}</h4>
  //         <div class="tips-component-controls">
  //             <Link label={this.backLabel} click={this.back} bsType="ghost" icon="➔"/>
  //             <ButtonComponent label={this.acceptLabel} click={this.accept} />
  //         </div>
  //     </div>
  //   );
  // }

  render() {
    console.log(this.acceptLabel, '  ', this.subHeading)
    return (
      <div class={`tips-component ${this.tipsPosition}`}>
        <h6>{this.subHeading}</h6>
        <h5>Tips</h5>
      </div>
    )
  }

}
