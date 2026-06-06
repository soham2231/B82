// import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // async function fetchDataAxios() {
  //   try {
  //     const res = await axios.get("https://dummyjson.com/products", {});
  //     setProducts(res.data.products);
  //   } catch (err) {
  //     setError(true);
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-secondary"></div>
          <div className="col-10">
            <div className="bg-secondary"><h1 className="text-center fw-bold text-info" >Product List</h1></  div>
            <div className="row">
              {products.map((p, i) => {
                console.log(p);
                return (
                  <div className="col-12 col-md-4 col-lg-3">
                    <div className="card" style={{ width: "18rem", height: "100%" }}>
                      <img
                        src={p.thumbnail}
                        className="card-img-top"
                        alt={p.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{p.title}</h5>
                        <p className="card-text">
                          {p.description.slice(0, 50)}...
                        </p>
                        <p>Price: ${p.price}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
