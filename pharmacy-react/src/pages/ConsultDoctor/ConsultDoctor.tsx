// src/pages/ConsultDoctor/ConsultDoctor.tsx
import React from "react";
import DoctorCategory from "./DoctorCategory";

const ConsultDoctor: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="pb-28">
        {/* Top Banner Image */}
        <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] mb-6 overflow-hidden rounded-xl">
          <img
            src="https://assets.pharmeasy.in/web-assets/images/banner_doctorConsult_main.webp?dim=1440x1440&q=75" // Make sure this image exists in your public/assets folder
            alt="Consult Doctor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Top Concerns */}
        <section className="mb-6 px-80">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color mb-6 text-center">
            Top Concerns
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 place-items-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-lg shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_generalHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-xl shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_heartHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-xl shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_bloodSugarHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-xl shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_boneHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-xl shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_skinHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-xl shadow-md">
                <img
                  src="https://assets.pharmeasy.in/web-assets/images/tile_docConsult_sexualHealthConcern.png"
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Find a Doctor by Symptoms */}
        <section className="pt-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color mb-6 text-center">
            Find a Doctor by Symptoms
          </h1>
          <DoctorCategory />
        </section>

        {/* 5. Why Choose Us */}
        <section className="mb-6 px-4">
          <h2 className="text-xl font-semibold mb-4">Why choose us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-4 rounded-md shadow">
              📞 Free Follow-up Post Consultation
            </div>
            <div className="bg-blue-100 p-4 rounded-md shadow">
              🕒 24×7 availability of Doctors
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow">
              👨‍⚕️ Access to Specialists
            </div>
            <div className="bg-purple-100 p-4 rounded-md shadow">
              💰 Cost-Effective
            </div>
          </div>
        </section>

        {/* 6. How to Book */}
        <section className="mb-6 px-4">
          <h2 className="text-xl font-semibold mb-4">
            How to book a consultation?
          </h2>
          <ol className="space-y-4 list-decimal pl-6">
            <li>
              <strong>Select your health concern</strong>
              <br />
              Choose a concern that best suits your needs.
            </li>
            <li>
              <strong>Choose the doctor</strong>
              <br />
              Pick from our specialists.
            </li>
            <li>
              <strong>Enter your details</strong>
              <br />
              For the consultation.
            </li>
            <li>
              <strong>Select time slot</strong>
              <br />
              Based on your convenience.
            </li>
          </ol>
        </section>
      </div>

      {/* CTA Button */}
      <div className="fixed bottom-4 w-full flex justify-center">
        <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full shadow-lg">
          Book consultation
        </button>
      </div>
    </div>
  );
};

export default ConsultDoctor;
