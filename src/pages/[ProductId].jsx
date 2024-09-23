import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import MetaTags from "../components/MetaTags";

const ProductId = () => {
  const { items } = useSelector((state) => state.products);

  let params = useParams();
  let clickedProduct = items.filter((item) => item.id == params.id);

  return clickedProduct.map((product) => (
    <div>
      <MetaTags
        title={product.title}
        description={product.description}
        image={product.image}
        url={`https://your-website.com/product/${product.id}`}
      />
      <ProductItem
        key={product.id}
        id={product.id}
        imgSrc={product.image}
        imgAlt={product.title}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    </div>
  ));
};

export default ProductId;
