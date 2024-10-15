import Cart from "./cart";
import CartProvider from "./cartProvider";
import Shop from "./shop";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="bg-white shadow-md w-full py-6">
        <h1 className="mt-10 mb-4 text-center text-[32px] text-gray-800 font-extrabold tracking-wide">
          Context API
        </h1>
        <h2 className="text-center text-[24px] font-bold text-gray-700">
          Cart Functionality
        </h2>
      </header>
      
      <main className="w-full max-w-4xl px-4 py-8 flex flex-col items-center">
        <CartProvider>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-6">
            <Shop />
          </div>

          <div className="mt-10 mb-10 w-full">
            <hr className="border-t border-gray-300" />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <Cart />
          </div>
        </CartProvider>
      </main>
      
      <footer className="text-gray-600 text-sm py-4">
        © 2024 Fatima Sheikh. All rights reserved.
      </footer>
    </div>
  );
}
