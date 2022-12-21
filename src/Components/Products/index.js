import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const url = "https://dummyjson.com/products?limit=100";
  console.log(url);
  const fetchProducts = async (api) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(api);
      const { products } = await response.json();
      console.log(products);
      setProducts(products);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || " something went wrong pls try after sometime"
      });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  if (isError?.status) {
    return (
      <div>
        <h4 style={{ textAlign: "center", color: "red" }}> {isError?.msg}</h4>
      </div>
    );
  }
  return (
    <div>
      <h3> Products</h3>
      {loading ? (
        <h3>LOADING...! </h3>
      ) : (
        <div className="phone-container">
          {products.map((item) => {
            const { id, thumbnail } = item;
            return (
              <div key={id} className="phone">
                <Link to={`/products/${id}`}>
                  <img alt="title" src={thumbnail} width={251} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
