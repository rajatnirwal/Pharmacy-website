import React from 'react';
import { products } from '../../assets/assets2';

const Cart = () => {
  const product = products[2]; // Example product, change index as needed

  const shipping = 50;
  const tax = 18;
  const subtotal = product.price;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-32 ">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Cart Items */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Your Cart (1 item)
          </h2>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl mb-4">
            <div className="flex items-center gap-4">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm mt-2 text-green-700">Qty: 1</p>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-800">₹{product.price}</div>
          </div>
        </div>

        {/* Right Side - Summary */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition duration-300 font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
