import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary-color text-sm text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Partner with PharmaCure</li>
              <li>Sell at PharmaCure</li>
            </ul>
          </div>

          {/* Featured Categories */}
          <div>
            <h3 className="font-semibold mb-2">Featured Categories</h3>
            <ul className="space-y-1">
              <li>Must Haves</li>
              <li>Diabetes Essentials</li>
              <li>Vitamins & Supplements</li>
              <li>Monsoon Store</li>
              <li>Heart Care</li>
              <li>Ayurvedic Care</li>
              <li>Sports Nutrition</li>
              <li>Skin Care</li>
              <li>Mobility & Elderly Care</li>
              <li>Health Food and Drinks</li>
              <li>Mother and Baby Care</li>
              <li>Personal Care</li>
              <li>Sexual Wellness</li>
              <li>Health Concerns</li>
              <li>Healthcare Devices</li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="font-semibold mb-2">Need Help</h3>
            <ul className="space-y-1">
              <li>Browse All Medicines</li>
              <li>Browse All Molecules</li>
              <li>Browse All Cities</li>
              <li>Browse All Areas</li>
              <li>Browse All Stores</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Policy Info */}
          <div>
            <h3 className="font-semibold mb-2">Policy Info</h3>
            <ul className="space-y-1">
              <li>Editorial Policy</li>
              <li>Privacy Policy</li>
              <li>Vulnerability Disclosure</li>
              <li>Terms and Conditions</li>
              <li>Customer Support Policy</li>
              <li>Return Policy</li>
              <li>Smartbuy Policy</li>
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            <h3 className="font-semibold mb-2">Follow us on</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a href="#">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a href="#">
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
              <a href="#">
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <h3 className="font-semibold mb-2">Download App</h3>
            <div className="flex flex-col space-y-2">
              <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded text-xs">
                Google Play
              </button>
              <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded text-xs">
                App Store
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 border-t pt-4 text-xs text-gray-500">
          © 2025 Pharma Cure. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
