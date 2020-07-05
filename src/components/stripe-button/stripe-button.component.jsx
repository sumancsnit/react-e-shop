import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H1FE4LkDHA2BJDo8C4J881v8ZEk1XR5zJOakH7IZIkyAls0JNQYBBQsbsRCfpcU0vCKosytR5dCO0inj3jeaG8D00NMQo0r5L';

  const onToken = (token) => {
    console.log('StripeCheckoutButton -> token', token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='S Mart Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
