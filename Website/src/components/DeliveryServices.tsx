import React from 'react';
import Container from './Container';

const DeliveryServices = () => {
  return (
    <section className="py-14 px-4 bg-[#FAF4F4]">
      <Container >
        <div className=" flex justify-between max-md:flex-col gap-6 md:gap-4">
          <div className="max-md:text-center">
            <h3 className="text-3xl font-mediam mb-3 text-black">Free Delivery</h3>
            <p className="text-[#9F9F9F] text-xl">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="max-md:text-center">
            <h3 className="text-3xl font-mediam mb-3 text-black">90 Days Return</h3>
            <p className="text-[#9F9F9F] text-xl">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="max-md:text-center">
            <h3 className="text-3xl font-mediam mb-3 text-black">Secure Payment</h3>
            <p className="text-[#9F9F9F] text-xl">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeliveryServices;

