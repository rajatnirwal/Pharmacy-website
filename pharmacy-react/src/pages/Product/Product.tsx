import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/assets'; // Replace with actual path
import { Product as ProductType } from '../../context/ShopContext';

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState<ProductType | null>(null);
  const [image, setImage] = useState<string>('');
  const [size, setSize] = useState<string>('');

  useEffect(() => {
    const matchedProduct = products.find((item) => item._id === productId);
    if (matchedProduct) {
      setProductData(matchedProduct);
      setImage(matchedProduct.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0">Loading...</div>;
  }

  return (
    <div className="border-t-2 py-24 px-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, idx) => (
              <img
                onClick={() => setImage(img)}
                src={img}
                key={idx}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Thumbnail ${idx + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[70%]">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>

        {/* ---------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">


            <p className="pl-2 text-sm text-gray-500">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.discountPrice ?? productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {productData.sizes && productData.sizes.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((s, i) => (
                  <button
                    onClick={() => setSize(s)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      s === size ? 'border-orange-500' : ''
                    }`}
                    key={i}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-green-500 text-white px-8 py-3 my-5 transition-all hover:bg-green-800  text-sm active:bg-green-800"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✅ 100% Original product</p>
            <p>💰 Cash on delivery available</p>
            <p>↩️ Easy returns within 7 days</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review ---------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Welcome to your one-stop fashion and lifestyle destination — where quality meets affordability,
            and trends are just a click away. Whether you’re looking for the latest seasonal outfits,
            comfortable casual wear, or the perfect accessory to complete your look, our wide selection has
            something for everyone.
          </p>
          <p>
            Each product is carefully curated to match current fashion trends, ensuring that you look and feel
            confident in every purchase.
          </p>
        </div>
      </div>

      {/* ---------- Related Products ---------- */}

    </div>
  );
};

export default Product;