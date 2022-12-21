import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";
  console.log(url);
  const fetchProducts = async (api) => {
    setLoading(true);
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <div>
      <h4> Fake Store Products </h4>
      {loading ? (
        <h3> LOADING...!</h3>
      ) : (
        <div className="phone-container">
          {products.map((item) => {
            const { id, image } = item;
            return (
              <div key={id} className="phone">
                <Link to={`/store/${id}`}>
                  <img alt="title" src={image} width={155} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
