import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const products = useSelector((state) => state.products.items || []);
  const { numItemsInCart } = useSelector((state) => state.cart || []);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  function handleSearch(e) {
    setInput(e.target.value);
  }

  // if cart is empty, dont redirect, eme
  function handleCartClick() {
    if (numItemsInCart > 0) {
      navigate("/cart");
    }
  }

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <nav className=" shadow p-4 bg-gray-800 w-full">
      <div className="mx-auto flex items-center justify-between">
        <div className="hover:cursor-pointer" onClick={handleLogoClick}>
          <img
            src="logo.webp"
            alt="Logo"
            className="w-[120px] h-[60px]  rounded-md"
          />
        </div>
        <div className="flex justify-center w-1/2">
          <input
            type="text"
            value={input}
            placeholder="Search"
            onChange={handleSearch}
            className="w-[80%] px-4 py-2 border-r-0 rounded-l-2xl focus:outline-none "
          />
          <div className="py-2 bg-white rounded-r-2xl pr-4">
            <FaSearch color="Gray" size={24} />
          </div>
        </div>
        <div>
          <button
            className="border-white border py-2 px-8 rounded-lg hover:scale-105 flex text-white"
            onClick={handleCartClick}
          >
            <IoBagOutline size={30} />
            <span className="pl-2 text-2xl">{numItemsInCart}</span>
          </button>
        </div>
      </div>
      {input && (
        <div className="searchItem">
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <SearchItem
                    imgSrc={product.image}
                    imgAlt={product.title}
                    title={product.title}
                    id={product.id}
                  />
                </li>
              ))
            ) : (
              <p className="text-white">No products found</p>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
