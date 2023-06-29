/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Template #1",
      price: 10,
      imageSrc:
        "https://i.ibb.co/6NjbpdS/photo1688019108.jpg",
      imageAlt:
        "Template #1",
    },
    {
      id: 2,
      name: "Template #2",
      price: 10,
      imageSrc:
        "https://i.ibb.co/y0dzmpp/photo1688019200.jpg",
      imageAlt:
        "Template #2",
    },
    {
      id: 3,
      name: "Template #3",
      price: 10,
      imageSrc:
        "https://i.ibb.co/2hryygd/photo1688019254.jpg",
      imageAlt:
        "Template #3",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Smart website templates for smart money!</h1>
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
