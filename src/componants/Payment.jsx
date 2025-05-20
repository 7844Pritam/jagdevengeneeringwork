/* File: PaymentMethods.js */
import React from 'react';
import { motion } from 'framer-motion';

const PaymentMethods = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-6 md:p-10 bg-gray-100"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        We Accept Various Payment Methods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-800">Bank Transfer</h4>
          <p className="text-gray-600 text-sm">Secure and reliable payments</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-800">Credit Card</h4>
          <p className="text-gray-600 text-sm">Visa, MasterCard, and more</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-800">Online Payments</h4>
          <p className="text-gray-600 text-sm">PayPal, UPI, and others</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-800">Cash on Delivery</h4>
          <p className="text-gray-600 text-sm">Pay after project completion</p>
        </div>
      </div>
    </motion.section>
  );
};

export default PaymentMethods;