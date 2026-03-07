"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LuTrash2, LuMinus, LuPlus } from "react-icons/lu";
import { IoClose, IoCheckmarkCircle, IoLocationOutline, IoPersonOutline, IoCallOutline } from "react-icons/io5";
import { FiShoppingBag, FiTruck } from "react-icons/fi";
import { placeOrder } from "@/utils/appwrite";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function PlaceOrder({ cart, open, setOpen, setCart }) {
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const completeOrder = async () => {
    setLoading(true);
    try {
      const orderDetails = {
        onlineOrderItems: cart.map((item) => ({
          product: item.name,
          variant: item.id,
          quantity: item.quantity || 1,
          price: item.price,
        })),
        total: parseFloat(
          cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
        ),
        name: form.name,
        phone: form.phone,
        location: form.location,
      };

      await placeOrder(orderDetails);
      setOrderSuccess(true);
      setTimeout(() => {
        setCart([]);
        setOpen(false);
        setOrderSuccess(false);
        setForm({ name: "", phone: "", location: "" });
      }, 3000);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidPhone = /^\d{10}$/.test(form.phone);
  const isFormValid =
    form.name.trim() && form.phone.trim() && form.location.trim() && isValidPhone;

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const updateQuantity = (index, delta) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(0, (item.quantity || 1) + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full max-w-lg p-0 sm:max-w-xl [&>button]:hidden"
      >
        <AnimatePresence mode="wait">
          {orderSuccess ? (
            // Success State
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex h-full flex-col items-center justify-center p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <IoCheckmarkCircle className="h-24 w-24 text-emerald-500" />
              </motion.div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Order Placed Successfully!
              </h2>
              <p className="mt-2 text-gray-500">
                Thank you for your order. We'll contact you shortly to confirm
                delivery details.
              </p>
              <div className="mt-8 rounded-xl bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <FiTruck className="h-6 w-6 text-emerald-600" />
                  <div className="text-left">
                    <p className="font-medium text-emerald-900">
                      Delivery Information
                    </p>
                    <p className="text-sm text-emerald-700">
                      We deliver across Kenya within 2-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Cart & Checkout
            <motion.div
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full flex-col"
            >
              {/* Header */}
              <SheetHeader className="border-b border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <FiShoppingBag className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <SheetTitle className="text-lg font-semibold text-gray-900">
                        Your Cart
                      </SheetTitle>
                      <p className="text-sm text-gray-500">
                        {cart.length} item{cart.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full p-2 transition-colors hover:bg-gray-100"
                  >
                    <IoClose className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </SheetHeader>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FiShoppingBag className="h-16 w-16 text-gray-200" />
                    <p className="mt-4 text-gray-500">Your cart is empty</p>
                    <Button
                      onClick={() => setOpen(false)}
                      className="mt-4 bg-emerald-500 hover:bg-emerald-600"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <motion.div
                        key={`${item.name}-${item.variant}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex gap-4">
                          {/* Product Image */}
                          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-2"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <FiShoppingBag className="h-8 w-8 text-gray-300" />
                              </div>
                            )}
                          </div>

                          {/* Product Details */}
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.variant}
                              </p>
                            </div>
                            <p className="text-lg font-bold text-emerald-600">
                              KES {(item.price * (item.quantity || 1)).toLocaleString()}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => removeItem(index)}
                              className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            >
                              <LuTrash2 className="h-4 w-4" />
                            </button>
                            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1">
                              <button
                                onClick={() => updateQuantity(index, -1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-white"
                              >
                                <LuMinus className="h-4 w-4" />
                              </button>
                              <span className="w-6 text-center font-medium">
                                {item.quantity || 1}
                              </span>
                              <button
                                onClick={() => updateQuantity(index, 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-white"
                              >
                                <LuPlus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Delivery Form */}
                {cart.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
                      <FiTruck className="h-5 w-5 text-emerald-500" />
                      Delivery Information
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <IoPersonOutline className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <Input
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="h-12 rounded-xl border-gray-200 pl-10 focus:border-emerald-500 focus:ring-emerald-500"
                          type="text"
                          required
                        />
                      </div>

                      <div className="relative">
                        <IoCallOutline className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <Input
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number (e.g., 0712345678)"
                          className={`h-12 rounded-xl border-gray-200 pl-10 focus:border-emerald-500 focus:ring-emerald-500 ${
                            form.phone && !isValidPhone
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                          maxLength={10}
                          type="tel"
                          required
                        />
                        {form.phone && !isValidPhone && (
                          <p className="mt-1 text-xs text-red-500">
                            Phone number must be exactly 10 digits
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <IoLocationOutline className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          name="location"
                          value={form.location}
                          onChange={handleInputChange}
                          placeholder="Delivery Address (County, Town, Specific Location)"
                          className="min-h-[80px] w-full resize-none rounded-xl border border-gray-200 bg-transparent py-3 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-100 bg-gray-50 p-6">
                  {/* Order Summary */}
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span>KES {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Delivery</span>
                      <span className="text-emerald-600">To be calculated</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-lg font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-xl font-bold text-emerald-600">
                        KES {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={completeOrder}
                    disabled={loading || !isFormValid}
                    className="h-14 w-full rounded-xl bg-emerald-500 text-lg font-semibold text-white transition-all hover:bg-emerald-600 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing...
                      </div>
                    ) : (
                      `Place Order - KES ${total.toLocaleString()}`
                    )}
                  </Button>

                  <p className="mt-3 text-center text-xs text-gray-500">
                    By placing this order, you agree to our terms & conditions
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
}
