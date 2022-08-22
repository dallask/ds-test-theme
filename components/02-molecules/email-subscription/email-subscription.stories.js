import React from 'react';

import emailSubscriptionTwig from './email-subscription.twig';


/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Email Subscription' };

export const emailSubscription = () => (
  <div dangerouslySetInnerHTML={{ __html: emailSubscriptionTwig(
    {
      "email_subscription_info": "Enter your email to learn more about our mission and to receive periodic updates and announcements.",
      "placeholder": "Email",
      "name": "email",
      "submit_btn_value": "Sign Me Up"
    }
    ) }}/>
);
