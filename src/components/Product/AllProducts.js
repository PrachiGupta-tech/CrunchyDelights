import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { IoSearchOutline } from "react-icons/io5";

const AllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="md:px-32 py-20 p-5 md:p-0">
          <div className="mb-8 mt-4 md:flex md:justify-between">
            <h2 className="text-4xl font-semibold">Our Products</h2>

            <div className="relative w-full mt-4 md:mt-0 md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:border-gray-400"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoSearchOutline className="w-5 h-5 text-gray-500" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {product.title}
                  </h3>
                  <p className="text-xl font-semibold text-gray-700">
                    ${product.price}
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-600">
                      Rating: {product.rating.rate} / 5 ({product.rating.count}{" "}
                      reviews)
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm text-center mb-4">
                    {product.description.slice(0, 100)}...
                  </p>
                  <button className="bg-[#FF9119] text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <div>
                <p className="">
                  Looks like you’ve searched for something rare! Try another
                  search.
                </p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AllProducts;
