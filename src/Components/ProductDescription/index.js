import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductDescription() {
  const params = useParams();
  console.log("params", params);
  const [prod, setProd] = useState({});
  const url = "https://dummyjson.com/products?limit=100";
  console.log("url", url);
  const fetchProducts = async (api) => {
    const response = await fetch(api);
    const { products } = await response.json();
    console.log(products);
    setProd(products);
  };
  useEffect(() => {
    const correctUrl = `${url}/${params.id}`;
    fetchProducts(correctUrl);
  }, [params.id]);
  return (
    <div>
      <h2> Product Description </h2>
      <div>
        <h3>{prod?.title} </h3>
        <h4> {prod?.description} </h4>
      </div>
    </div>
  );
}
