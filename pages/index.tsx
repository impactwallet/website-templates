/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Non-Secrets of a Successful Presentation",
      price: 30,
      imageSrc:
        "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671568146/Screenshot_2022-12-21_015850_jexciy.png",
      imageAlt:
        "Non-Secrets of a Successful Presentation",
    },
    {
      id: 2,
      name: "Story Tells master-class",
      price: 30,
      imageSrc:
        "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671568180/Screenshot_2022-12-21_015924_hxfgdr.png",
      imageAlt:
        "Story Tells master-class",
    },
    {
      id: 3,
      name: "The Network",
      price: 30,
      imageSrc:
        "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671573010/Screenshot_2022-12-21_031958_jsw9nm.png",
      imageAlt:
        "The Network",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Introducing our latest master classes</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Buy with USDC and get a discount!</h1>
    </div>
          <div className="grid  mx-auto gap-y-10 gap-x-30 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
