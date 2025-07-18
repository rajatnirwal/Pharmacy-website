import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-sm text-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Our Services</h3>
            <ul>
              <li>Medicine Delivery</li>
              <li>Diagnostics</li>
              <li>Healthcare Products</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul>
              <li>FAQs</li>
              <li>Customer Support</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Download App</h3>
            <div className="flex space-x-4 mt-2">
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded">
                {/* FaGooglePlay removed */}
                <span className="text-sm">Google Play</span>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded">
                {/* FaApple removed */}
                <span className="text-sm">App Store</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t pt-4">
          © 2025 My Pharmacy Website. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
