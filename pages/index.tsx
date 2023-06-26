/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Rosemary & Rhubarb",
      price: 10,
      imageSrc:
        "https://i.ibb.co/cgh9kLW/photo1687716388.jpg",
      imageAlt:
        "Rosemary & Rhubarb",
    },
    {
      id: 2,
      name: "Christmas Punch",
      price: 10,
      imageSrc:
        "https://i.ibb.co/fSHCrZL/photo1687716407.jpg",
      imageAlt:
        "Christmas Punch",
    },
    {
      id: 3,
      name: "Eau de Lavender",
      price: 10,
      imageSrc:
        "https://i.ibb.co/WWS3QmM/photo1687716450.jpg",
      imageAlt:
        "Eau de Lavender",
    },
    {
      id: 4,
      name: "Rhubarb Fix",
      price: 10,
      imageSrc:
        "https://i.ibb.co/yNjYrQh/photo1687716464.jpg",
      imageAlt:
        "Rhubarb Fix",
    },
    {
      id: 5,
      name: "Butter & Smoke",
      price: 10,
      imageSrc:
        "https://i.ibb.co/8NgnzMr/photo1687716675.jpg",
      imageAlt:
        "Butter & Smoke",
    },
    {
      id: 6,
      name: "Cucumber & Rose Collins",
      price: 10,
      imageSrc:
        "https://i.ibb.co/pRPDgr0/photo1687717575.jpg",
      imageAlt:
        "Cucumber & Rose Collins",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">The best cocktails at the best price!</h1>
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
