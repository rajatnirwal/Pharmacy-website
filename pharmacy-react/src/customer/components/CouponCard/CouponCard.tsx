import React from 'react'

const CouponCard = () => {
  return (
    <div>
        <div className="max-w-md mx-auto mt-6">
      <div className="bg-white border rounded-xl shadow p-4 relative flex flex-col gap-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.worldvectorlogo.com/logos/happyeasygo-1.svg"
              alt="HappyEasyGo"
              className="w-16 h-auto"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Flat ₹650 OFF On Your Bookings
          </p>
        </div>

        {/* Subtext */}
        <p className="text-sm text-gray-600 pt-2">
          Offer valid on transaction above ₹1999 on Pharmeasy
        </p>

        {/* Divider */}
        <div className="border-t my-3"></div>

        {/* Code Section */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">
            Code: <strong className="text-gray-900">HEGPE650</strong>
          </span>
          <button
            className="text-teal-700 font-semibold hover:underline"
            onClick={() => navigator.clipboard.writeText("HEGPE650")}
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CouponCard