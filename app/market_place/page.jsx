"use client";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { getProducts } from "@/utils/appwrite";

import { IoCartOutline } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PlaceOrder from "./order";
import { Button } from "@/components/ui/button";

export default function MarketPlace() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const addToCart = (product, variant) => {
    if (variant.stock <= 0) {
      toast.error("This variant is out of stock");
      return;
    }
    setCart((prevCart) => {
      const idx = prevCart.findIndex(
        (item) => item.name === product.name && item.variant === variant.name
      );
      if (idx !== -1) {
        // If item exists, increment quantity
        const updatedCart = [...prevCart];
        updatedCart[idx] = {
          ...updatedCart[idx],
          quantity: (updatedCart[idx].quantity || 1) + 1,
        };
        return updatedCart;
      } else {
        // Add new item with quantity 1
        return [
          ...prevCart,
          {
            id: variant.$id,
            name: product.name,
            variant: variant.name,
            price: variant.retail_price,
            quantity: 1,
          },
        ];
      }
    });
  };

  useEffect(() => {
    // Fetch categories and products from the server
    const fetchCategories = async () => {
      const categories = await getProducts();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative lg:h-[500px]  bg-[url('/images/team/team.jpg')] saturate-150 bg-top bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute bottom-20 z-10 md:w-3/5 pr-4">
            <p className="text-3xl lg:text-6xl z-10 font-medium  text-emerald-500">
              Welcome to Our Market Place
            </p>
            <p className="text-lg pt-2 lg:text-xl font-light  text-white">
              Explore a wide range of high-quality certified seed potatoes and
              agricultural products. Our marketplace connects you with trusted
              suppliers, ensuring you have access to the best resources for your
              farming needs.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>
      </div>
      <div className="bg-white p-10 flex flex-col gap-4 lg:p-20 text-black relative">
        {categories.map((category) => (
          <div key={category.$id} className="border-b pb-8 mb-8 border-gray-400">
            <h2 className="text-2xl lg:text-4xl text-emerald-600 font-medium mb-4 capitalize">
              {category.category_name + "s"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.products.map((product) => (
                <div
                  key={product.$id}
                  className="border relative shadow-md text-center rounded transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500"
                >
                  <div className="h-72 relative">
                    <Image
                      src={product.image || "/images/products/thunder.png"}
                      placeholder="blur"
                      blurDataURL="/images/products/thunder.png"
                      alt={product.name}
                      layout="fill"
                      className="object-contain bg-gray-100"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center gap-4">
                    <h3 className="font-medium text-xl">{product.name}</h3>
                    {/* <Button variant="default" className="">
                      Select Variant ({product.variants.length})
                    </Button> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full bg-emerald-50"
                        >
                          Add to Cart
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-2 border border-gray-300">
                        {product.variants.length === 0 ? (
                          <p className="text-gray-500 p-2">
                            No variants available
                          </p>
                        ) : (
                          <div>
                            <h1 className="text-md px-4 font-semibold text-emerald-600">
                              {product.name}
                            </h1>
                            {product.variants.map((variant, vIdx) => (
                              <div
                                key={vIdx}
                                className={`px-4 flex justify-between py-2 rounded cursor-pointer hover:bg-gray-100 ${
                                  variant.stock === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                                onClick={() => addToCart(product, variant)}
                              >
                                <p className="font-medium">
                                  {variant.name}{" "}
                                  {/* <span className="text-xs">
                                    (Stock: {variant.stock})
                                  </span> */}
                                </p>
                                <p className="text-sm text-gray-500">
                                  KES {variant.retail_price}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          onClick={() => {
            if (cart.length === 0) {
              toast.error("Your cart is empty");
              return;
            }
            setOpen(true);
          }}
          className="flex cursor-pointer items-center justify-center fixed bottom-10 right-10 gap-2 rounded-xl text-white bg-emerald-500 p-4 text-center"
        >
          <IoCartOutline className="size-8" />
          <div className="text-sm font-semibold">
            <p className="">{cart.length} Item(s) Added</p>
            <p className="hidden">Complete Order</p>
          </div>
        </div>
        <PlaceOrder cart={cart} open={open} setOpen={setOpen} setCart={setCart} />
      </div>

      <Footer />
    </>
  );
}
