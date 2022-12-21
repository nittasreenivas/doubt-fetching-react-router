import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function StoreDescription() {
  const [prod, setProd] = useState({});
  const url = "https://fakestoreapi.com/products";
  console.log(url);
  const params = useParams();
  console.log("params", params);
  const fetchProds = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setProd(data);
  };
  useEffect(() => {
    const correctUrl = `${url}/${params.id}`;
    fetchProds(correctUrl);
  }, [params.id]);
  return (
    <div>
      <h2> Store Description </h2>
      <div className="store-desc">
        <h3>{prod?.title} </h3>
        <img alt={prod?.title} src={prod?.image} width={101} />
        <p> {prod?.description} </p>
        <button>${prod?.price} </button>
      </div>
    </div>
  );
}
