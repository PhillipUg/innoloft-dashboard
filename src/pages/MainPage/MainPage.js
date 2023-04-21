import React from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const config = useSelector((state) => state.config.data);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10 px-4">
        <div style={{ backgroundColor: config.mainColor }} className="rounded-md">
          <div className="sm:flex sm:items-center px-6 py-8">
            <div className="text-center sm:text-left sm:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to Innoloft Dashboard</h2>
              <p className="text-white leading-relaxed mb-4">
                Explore the powerful features of Innoloft Dashboard to manage your products, monitor
                investment efforts, and connect with your partners seamlessly.
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                alt="Innoloft Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
            <p>
              Use our intuitive dashboard to manage product details, monitor their performance, and
              make necessary updates with ease.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Monitor Investments</h3>
            <p>
              Keep track of your investments and make data-driven decisions to optimize your
              investment strategies.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Connect with Partners</h3>
            <p>
              Leverage our extensive network of partners to expand your business reach and
              collaborate for mutual growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
