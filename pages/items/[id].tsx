/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { Checkout } from "../../components/checkout";
import { ProductContext } from "../_app";
const products = [
  {
    id: 1,
    price: 10,
    orgId: "648608fd0e2de5267a9d4eae",
    wallet: "CQo1KK1XdLSJNRNQSZ8m5fWFaSMD4Zp4DsqDbrSduzPf",
    name: "Rosemary & Rhubarb",
    imageSrc: "https://i.ibb.co/cgh9kLW/photo1687716388.jpg",
    imageAlt: "Rosemary & Rhubarb",
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
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
interface Product {
  id: number;
  name: string;
  href: string;
  price: number;
  quantity: number;
  image: string;
  imageAlt: string;
  wallet: string;
  orgId: string;
}

const Item = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const prodContext = useContext(ProductContext);
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    if (router.query.id) {
      setProduct(products[parseInt(router.query.id as string) - 1]);
    }
  }, [router.query.id]);
  const [open, setOpen] = useState<boolean>(false);
  if (product !== null) {
    return (
      <>
        <Checkout products={prodContext.prod} open={open} setOpen={setOpen} />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Tab.Group as="div" className="flex flex-col-reverse">
                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                  <Tab.Panel>
                    <img
                      src={product?.imageSrc}
                      alt={product?.imageAlt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1
                  className="text-3xl  font-bold tracking-tight text-gray-900"
                >
                  {product?.name}
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl pb-5 tracking-tight text-gray-900">
                    $ {product?.price}
                  </p>
                  <p className="pb-5 tracking-tight text-gray-900">
                    Solana Wallet<br/>
                    {product?.wallet}
                  </p>
                </div>
                <div className="sm:flex-col1 mt-10 flex">
                  <button
                    onClick={() => {
                      prodContext.setProd([
                        ...prodContext.prod,
                        {
                          id: parseInt(router.query.id as string) - 1,
                          name: product?.name,
                          image: product.imageSrc,
                          price: product.price,
                          quantity: 1,
                          orgId: product?.orgId,
                          wallet: product?.wallet,
                        },
                      ]);
                      setOpen(true);
                    }}
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
};

export default Item;
