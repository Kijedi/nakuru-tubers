import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/yu/sheet";
import { Button } from "@/components/yu/button";
import {Input}  from "@/components/yu/input";
import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { placeOrder } from "@/utils/appwrite";
import { toast } from "sonner";

export default function PlaceOrder({ cart, open, setOpen, setCart }) {
  const [loading, setLoading] = useState(false);
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
        total: parseFloat(cart
          .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)),
        name: form.name,
        phone: form.phone,
        location: form.location,
      };
      console.log("Order Details:", orderDetails);

      await placeOrder(orderDetails);
      toast.success("Order placed successfully!");
      setCart([]);
      setOpen(false);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
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

  const handleCompleteOrder = () => {
    // You can add validation here if needed
    completeOrder(form);
  };

  // Helper to check if phone is exactly 10 digits
  const isValidPhone = /^\d{10}$/.test(form.phone);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full max-w-7xl">
        <SheetHeader className="bg-gray-100 p-4">
          <SheetTitle className="text-xl">Your Order</SheetTitle>
        </SheetHeader>
        <div className=" bg-white shadow-lg rounded-lg p-6 h-full  ">
          <div className="">
            {cart.length === 0 ? (
              <p className="text-gray-600">No items in your order yet.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200"
                >
                  <div className="flex flex-col ">
                    <h3 className="text-lg font-semibold">
                      {item.variant} - {item.name}
                    </h3>
                    <p className="text-gray-600">
                      {`KES ${(item.price * (item.quantity || 1)).toFixed(2)}`}
                    </p>
                  </div>
                  <div className="flex items-end flex-col">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 ">
                        <Button
                          variant="outline"
                          size="icon"
                          className="px-2 py-1 font-black text-xl"
                          onClick={() =>
                            setCart((prev) =>
                              prev
                                .map((cartItem, i) =>
                                  i === index && cartItem.quantity > 1
                                    ? {
                                        ...cartItem,
                                        quantity: cartItem.quantity - 1,
                                      }
                                    : cartItem
                                )
                                .filter((cartItem) => cartItem.quantity > 0)
                            )
                          }
                          disabled={item.quantity === 1}
                        >
                          -
                        </Button>
                        <span className="px-2">{item.quantity || 1}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="px-2 py-1 text-xl"
                          onClick={() =>
                            setCart((prev) =>
                              prev.map((cartItem, i) =>
                                i === index
                                  ? {
                                      ...cartItem,
                                      quantity: (cartItem.quantity || 1) + 1,
                                    }
                                  : cartItem
                              )
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-2 flex items-center gap-2 bg-red-50 text-xs"
                      onClick={() =>
                        setCart((prev) => prev.filter((_, i) => i !== index))
                      }
                    >
                      <LuTrash2 className="text-red-500 size-4" />
                      <p className="text-gray-600">Remove item</p>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total to be Paid */}
          <div className="flex justify-between mt-4 text-gray-800">
            <p className=" text-lg  font-semibold">Total</p>
            <p className="text-2xl font-bold ">
              KES{" "}
              {cart
                .reduce(
                  (sum, item) => sum + item.price * (item.quantity || 1),
                  0
                )
                .toFixed(2)}
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <Input
              name="name"
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="text-xl py-2"
              type="text"
              required
            />
            <Input
              name="phone"
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="text-xl py-2"
              maxLength={10}
              minLength={10}
              type="tel"
              required
              value={form.phone}
            />
            {!isValidPhone && form.phone.length > 0 && (
              <p className="text-red-500 text-sm">Phone number must be exactly 10 digits.</p>
            )}
            <Input
              name="location"
              onChange={handleInputChange}
              placeholder="Enter your delivery address"
              className="text-xl py-2"
              type="text"
              required
            />
          </div>

          <Button
            onClick={handleCompleteOrder}
            disabled={
              loading ||
              !form.name.trim() ||
              !form.phone.trim() ||
              !form.location.trim() ||
              !isValidPhone
            }
            variant=""
            type="submit"
            className="w-full py-6 my-6  text-lg"
          >
            {loading ? "Placing Order..." : "Complete Order"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
