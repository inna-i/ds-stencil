import { html } from 'lit-html';

export default {
  title: 'Tips',
};

const Template = ({ heading, subHeading, accept, acceptLabel, back, backLabel, position }) => 
  html`<tips-component
      accept="${accept}"
      accept-label="${acceptLabel}"
      back="${back}"
      back-label="${backLabel}"
      heading="${heading}"
      sub-heading="${subHeading}"
      position="${position}"
    />
  `;


export const TopPosition = Template.bind({});
TopPosition.args = {
  position: 'bottom',
  heading: 'Tutorial title heading',
  subHeading: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  acceptLabel: 'Accept',
  backLabel: 'Back',
  accept: () => console.log('click'),
  back: () => console.log('click'),
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  position: 'right',
  heading: 'Tutorial title heading',
  subHeading: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  backLabel: 'Back',
  acceptLabel: 'Accept',
  // back: () => console.log('click'),
  // accept: () => console.log('click'),
};
