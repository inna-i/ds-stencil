import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tips',
};

const Template = ({ heading, subHeading, accept, acceptLabel, back, backLabel, tipsPosition }) => {
  return html`
    <tips-component
      accept="${accept}"
      acceptLabel="${acceptLabel}"
      back="${back}"
      backLabel="${backLabel}"
      heading="${heading}"
      subHeading="${subHeading}"
      tipsPosition="${tipsPosition}"
    />
  `;
};

export const Default = Template.bind({});
Default.args = {
  tipsPosition: 'bottom',
  heading: 'Tutorial title heading',
  subHeading: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  backLabel: 'Back',
  back: action('click'),
  acceptLabel: 'Accept',
  accept: action('click'),
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  tipsPosition: 'right',
  heading: 'Tutorial title heading',
  subHeading: 'Feature name',
  description: 'Social proof niche market ownership early adopters hypotheses gamification.',
  backLabel: 'Back',
  back: action('click'),
  acceptLabel: 'Accept',
  accept: action('click'),
};
