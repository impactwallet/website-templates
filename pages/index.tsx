/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Early Bird Ticket",
      price: 1,
      imageSrc:
        "https://i.ibb.co/L1WjbYz/photo1688015723.jpg",
      imageAlt:
        "Early Bird Ticket",
    },
    {
      id: 2,
      name: "Student Ticket",
      price: 10,
      imageSrc:
        "https://i.ibb.co/5WDQ0bT/photo1688015769.jpg",
      imageAlt:
        "Student Ticket",
    },
    {
      id: 3,
      name: "V.I.P. Ticket",
      price: 50,
      imageSrc:
        "https://i.ibb.co/JcLWCZQ/photo1688015778.jpg",
      imageAlt:
        "V.I.P. Ticket",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Get your ticket now to save money!</h1>
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
