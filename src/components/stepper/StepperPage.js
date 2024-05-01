import React from "react";
import Stepper from "./Stepper";

function StepperPage() {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];
  return (
    <div style={{maxWidth: "1100px", margin:"auto"}}>
      <Stepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default StepperPage;
