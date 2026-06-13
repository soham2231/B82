import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchProduct() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await res.json();

      setProduct(data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center mt-5">
        Something went wrong!
      </h2>
    );
  }

  return (
    <div className="container mt-5  bg-dark text-light rounded p-4">

      <Link to="/" className="btn btn-secondary mb-4">
        ← Back
      </Link>

      <div className="row">

        <div className="col-md-5">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7">

          <h1>{product.title}</h1>

          <p className="text-muted">
            {product.description}
          </p>

          <h3 className="text-success">
            $ {product.price}
          </h3>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Brand:</strong>{" "}
            {product.brand}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            ⭐ {product.rating}
          </p>

          <button className="btn btn-primary me-2">
            Add To Cart
          </button>

          <button className="btn btn-outline-danger">
            Wishlist
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;