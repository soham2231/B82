// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

//using context ......consume useContext
const {theme} = useContext(ThemeContext);
console.log(theme , "theme in card");



async function fetchData() {
  setLoading(true);

  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    setProducts(data.products);
  } catch (err) {
    console.error(err);
    setError(err.message);
  }

  setLoading(false);
}

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);



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




if (loading) {
    console.log("Loading:", loading);
console.log("Products:", products.length);
  return <h2 className="text-center mt-5">Loading Products...</h2>;

}

if (error) {
  return <h2 className="text-center mt-5">{error}</h2>;
}
  


 return (
  <>
  <Navbar />
  <div className="container-fluid">
    <div className="row">

      {/* Sidebar */}
      <div className={`col-md-2 bg-${theme=='dark' ? 'dark' : 'light'} text-${theme=='dark' ? 'light' : 'dark'} p-3 mb-3`}>
        <h3>Store</h3>
        <hr />
        <p>Dashboard</p>
        <p>Products</p>
      </div>

      {/* Main Content */}
      <div className={`col-md-10 bg-${theme=='dark' ? 'dark' : 'light'} text-${theme=='dark' ? 'light' : 'dark'} p-3 mb-3`}>

        <div className={`mb-3 p-3 bg-${theme=='dark' ? 'dark' : 'light'} text-${theme=='dark' ? 'light' : 'dark'}`}>
          <h1 className=" border-bottom border-light text-center fw-bold">
            Product List
          </h1>
        </div>

        <div className="row g-4">
          {products.map((p) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <div className= {`card border border-warning h-100 shadow-sm ${theme=='dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>

                <img
                  src={p.thumbnail}
                  className="card-img-top"
                  alt={p.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {p.title}
                  </h5>

                  <p className="card-text">
                    {p.description.slice(0, 60)}...
                  </p>

                  <p className="fw-bold text-success">
                    $ {p.price}
                  </p>

                  <div>
                      <Link
                    to={`/products/${p.id}`}
                    className="btn btn-outline-warning mt-auto"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-outline-warning mt-auto ms-2">Add to Cart</button>
                  </div>

                
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
  </>
);
};

export default Dashboard;
