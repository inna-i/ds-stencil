import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tips',
};

const Template = ({ heading, subHeading, accept, acceptLabel, back, backLabel, description, position }) => 
  html`<tips-component
      accept="${accept}"
      accept-label="${acceptLabel}"
      back="${back}"
      back-label="${backLabel}"
      heading="${heading}"
      sub-heading="${subHeading}"
      description=${description}
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
  accept: action('click'),
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
  back: () => console.log('click'),
  accept: () => console.log('click'),
};
