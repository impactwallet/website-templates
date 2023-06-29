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
      name: "Template #1",
      price: 10,
      imageSrc:
        "https://i.ibb.co/6NjbpdS/photo1688019108.jpg",
      imageAlt:
        "Template #1",
      orgId: "649d176134fc46d9b33c7a51",
      wallet: "GKMFEbbJeBeLG8jHzZVYLA9GWLa3gGTuyG4q7rumdGfW",
    },
    {
      id: 2,
      name: "Template #2",
      price: 10,
      imageSrc:
        "https://i.ibb.co/y0dzmpp/photo1688019200.jpg",
      imageAlt:
        "Template #2",
      orgId: "649d176134fc46d9b33c7a51",
      wallet: "GKMFEbbJeBeLG8jHzZVYLA9GWLa3gGTuyG4q7rumdGfW",
    },
    {
      id: 3,
      name: "Template #3",
      price: 10,
      imageSrc:
        "https://i.ibb.co/2hryygd/photo1688019254.jpg",
      imageAlt:
        "Template #3",
      orgId: "649d176134fc46d9b33c7a51",
      wallet: "GKMFEbbJeBeLG8jHzZVYLA9GWLa3gGTuyG4q7rumdGfW",
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
