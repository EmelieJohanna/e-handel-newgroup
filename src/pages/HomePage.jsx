import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import MetaTags from "../components/MetaTags";

const HomePage = () => {
  const { items, status, error } = useSelector((state) => state.products);

  return (
    <div className="">
      <MetaTags
        title="Shop Our Products - New Group"
        description="Browse our wide range of products, from clothing to accessories."
        url="https://e-handel-newgroup.vercel.app/"
      />
      <div className="relative flex justify-center items-center flex-col ">
        <div className="w-full">
          <img
            src="hero.webp"
            alt="Fashion"
            className="w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        <div className="absolute left-10 flex flex-col text-white text-center pl-10">
          <h3 className="text-3xl p-5">More than what you might expect.</h3>
          <p className="text-2xl">Fashion, Beauty, Design and much more!</p>
        </div>
      </div>
      <div>
        {status === "loading" && <div>Loading products...</div>}
        {error && <div>Error: {error}</div>}
        <ul className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-gray-100 border m-4 p-10">
          {items.map((product) => (
            <li key={product.id}>
              <ProductCard
                imgSrc={product.image}
                imgAlt={product.title}
                title={product.title}
                id={product.id}
                price={product.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
