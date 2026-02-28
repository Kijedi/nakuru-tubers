"use client";

import Image from "next/image";
import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import { getProducts } from "@/utils/appwrite";
import { motion, AnimatePresence } from "framer-motion";
import { IoCartOutline, IoLeafOutline, IoSearchOutline, IoImageOutline } from "react-icons/io5";
import { FiPackage, FiTruck, FiShield } from "react-icons/fi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PlaceOrder from "./order";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FiShield,
    title: "Certified Quality",
    description: "All products verified",
  },
  {
    icon: FiTruck,
    title: "Fast Delivery",
    description: "Across Kenya",
  },
  {
    icon: IoLeafOutline,
    title: "Fresh & Healthy",
    description: "Direct from farm",
  },
];

export default function MarketPlace() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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
        const updatedCart = [...prevCart];
        updatedCart[idx] = {
          ...updatedCart[idx],
          quantity: (updatedCart[idx].quantity || 1) + 1,
        };
        toast.success(`Added another ${variant.name} to cart`);
        return updatedCart;
      } else {
        toast.success(`${product.name} (${variant.name}) added to cart`);
        return [
          ...prevCart,
          {
            id: variant.$id,
            name: product.name,
            variant: variant.name,
            price: variant.retail_price,
            quantity: 1,
            image: product.image,
          },
        ];
      }
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getProducts();
        // Filter out products not visible online
        const filtered = categories.map((cat) => ({
          ...cat,
          products: (cat.products || []).filter(
            (p) => p.show_online !== false
          ),
        })).filter((cat) => cat.products.length > 0);
        const potatoes = filtered.filter((p) =>
          p.category_name.toLowerCase().includes("potato")
        );
        const otherProducts = filtered.filter(
          (p) => !p.category_name.toLowerCase().includes("potato")
        );
        const sortedCategories = [...potatoes, ...otherProducts];
        setCategories(sortedCategories);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Filter products based on search and category
  const filteredCategories = categories
    .filter((cat) =>
      activeCategory === "all"
        ? true
        : cat.category_name.toLowerCase().includes(activeCategory.toLowerCase())
    )
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.products.length > 0);

  const totalCartItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalCartValue = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <NavbarModern />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/pillars/3.jpg')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30">
              <IoLeafOutline className="h-4 w-4" />
              Farm Fresh Products
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Marketplace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
          >
            Shop certified seed potatoes and premium agricultural products.
            Direct from our farms to your doorstep across Kenya.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div className="relative">
              <IoSearchOutline className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-700 bg-gray-800/80 py-4 pl-12 pr-6 text-white placeholder-gray-400 outline-none backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <feature.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.$id}
                onClick={() => setActiveCategory(category.category_name)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium capitalize transition-all ${
                  activeCategory === category.category_name
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.category_name}s
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            // Loading State
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="aspect-square rounded-xl bg-gray-200" />
                  <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          ) : filteredCategories.length === 0 ? (
            // Empty State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <FiPackage className="h-16 w-16 text-gray-300" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                No products found
              </h3>
              <p className="mt-2 text-gray-500">
                {searchQuery
                  ? `No results for "${searchQuery}"`
                  : "Check back soon for new products"}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-emerald-600 hover:text-emerald-700"
                >
                  Clear search
                </button>
              )}
            </motion.div>
          ) : (
            // Products Grid
            <div className="space-y-16">
              <AnimatePresence mode="wait">
                {filteredCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.$id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold capitalize text-gray-900 lg:text-3xl">
                          {category.category_name}s
                        </h2>
                        <p className="mt-1 text-gray-500">
                          {category.products.length} product
                          {category.products.length !== 1 ? "s" : ""} available
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {category.products.map((product, prodIndex) => (
                        <motion.div
                          key={product.$id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: prodIndex * 0.05 }}
                          className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          {/* Product Image */}
                          <div className="relative aspect-square overflow-hidden bg-gray-100">
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-gray-400">
                                <IoImageOutline className="h-10 w-10 opacity-40" />
                                <span className="text-xs">No image</span>
                              </div>
                            )}
                            {/* Quick Add Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 hover:bg-gray-50">
                                    <IoCartOutline className="mr-2 h-5 w-5" />
                                    Add to Cart
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-72 rounded-xl border-0 p-0 shadow-2xl"
                                  align="center"
                                >
                                  <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 rounded-t-xl">
                                    <h4 className="font-semibold text-gray-900">
                                      {product.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                      Select a variant
                                    </p>
                                  </div>
                                  <div className="max-h-60 overflow-y-auto p-2">
                                    {product.variants.length === 0 ? (
                                      <p className="p-4 text-center text-gray-500">
                                        No variants available
                                      </p>
                                    ) : (
                                      product.variants.map((variant, vIdx) => (
                                        <button
                                          key={vIdx}
                                          onClick={() =>
                                            addToCart(product, variant)
                                          }
                                          disabled={variant.stock === 0}
                                          className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                                            variant.stock === 0
                                              ? "cursor-not-allowed opacity-50"
                                              : "hover:bg-emerald-50"
                                          }`}
                                        >
                                          <div>
                                            <p className="font-medium text-gray-900">
                                              {variant.name}
                                            </p>
                                            {variant.stock === 0 && (
                                              <p className="text-xs text-red-500">
                                                Out of stock
                                              </p>
                                            )}
                                          </div>
                                          <p className="font-semibold text-emerald-600">
                                            KES {variant.retail_price}
                                          </p>
                                        </button>
                                      ))
                                    )}
                                  </div>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {product.name}
                            </h3>
                            <div className="mt-2 flex items-center justify-between">
                              <p className="text-sm text-gray-500">
                                {product.variants.length} variant
                                {product.variants.length !== 1 ? "s" : ""}
                              </p>
                              {product.variants.length > 0 && (
                                <p className="font-semibold text-emerald-600">
                                  From KES{" "}
                                  {Math.min(
                                    ...product.variants.map(
                                      (v) => v.retail_price
                                    )
                                  )}
                                </p>
                              )}
                            </div>

                            {/* Mobile Add to Cart */}
                            <div className="mt-4 lg:hidden">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button className="w-full rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">
                                    <IoCartOutline className="mr-2 h-5 w-5" />
                                    Add to Cart
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-72 rounded-xl border-0 p-0 shadow-2xl"
                                  align="center"
                                >
                                  <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 rounded-t-xl">
                                    <h4 className="font-semibold text-gray-900">
                                      {product.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                      Select a variant
                                    </p>
                                  </div>
                                  <div className="max-h-60 overflow-y-auto p-2">
                                    {product.variants.length === 0 ? (
                                      <p className="p-4 text-center text-gray-500">
                                        No variants available
                                      </p>
                                    ) : (
                                      product.variants.map((variant, vIdx) => (
                                        <button
                                          key={vIdx}
                                          onClick={() =>
                                            addToCart(product, variant)
                                          }
                                          disabled={variant.stock === 0}
                                          className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                                            variant.stock === 0
                                              ? "cursor-not-allowed opacity-50"
                                              : "hover:bg-emerald-50"
                                          }`}
                                        >
                                          <div>
                                            <p className="font-medium text-gray-900">
                                              {variant.name}
                                            </p>
                                            {variant.stock === 0 && (
                                              <p className="text-xs text-red-500">
                                                Out of stock
                                              </p>
                                            )}
                                          </div>
                                          <p className="font-semibold text-emerald-600">
                                            KES {variant.retail_price}
                                          </p>
                                        </button>
                                      ))
                                    )}
                                  </div>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 rounded-full bg-emerald-500 py-4 pl-6 pr-4 text-white shadow-2xl shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/40"
            >
              <div className="text-left">
                <p className="text-sm font-medium opacity-90">
                  {totalCartItems} item{totalCartItems !== 1 ? "s" : ""}
                </p>
                <p className="text-lg font-bold">
                  KES {totalCartValue.toLocaleString()}
                </p>
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                <IoCartOutline className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-600">
                  {totalCartItems}
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty Cart Button */}
      {cart.length === 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => toast.info("Your cart is empty. Add some products!")}
            className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-4 text-white shadow-xl transition-all hover:bg-gray-700"
          >
            <IoCartOutline className="h-6 w-6" />
            <span className="font-medium">Cart is empty</span>
          </button>
        </div>
      )}

      <PlaceOrder
        cart={cart}
        open={open}
        setOpen={setOpen}
        setCart={setCart}
      />

      <FooterModern />
    </>
  );
}
