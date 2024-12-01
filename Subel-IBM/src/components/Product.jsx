import React from "react";
import "./Product.css";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 16 Pro Max (Gold, 128 GB)",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRC8xnlcL5LsNC-vkSmT7w244_-uoOMOYg_yqpuZ5IvYDZMxB82Xyy3BvKETZg1cZ7goc9KinWW1qgJ8czuhRqIsnP61aXRcy2QYMad6NJaeMdyHKleIhc9SQlPvGUmYjzgNF8Ls90&usqp=CAc",
      rating: "4.6",
      ratings: "2,20,206 Ratings & 7,324 Reviews",
      bestSeller: true,
      price: "₹1,49,999",
      discount: "15%off",
      oldPrice: "₹1,69,999",
      fAssured: true,
    },
    {
      id: 2,
      name: "Apple iPhone 16 (Blue, 128 GB)",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZC3tNvxKtpp2TTQ94NTpD8YtDEumG8XZDjXR8I5sfBYpOD59cyPRG_sLu-bjqrnywuyGvjBC9FdIx8e28VMH-4WH2jpUSIuqhnlKV4ANHXZ9-A8_k1BDtyW3MqIz0IU3PqXDN2SY&usqp=CAc",
      rating: "4.3",
      ratings: "2,20,206 Ratings & 7,324 Reviews",
      bestSeller: false,
      price: "₹1,39,999",
      discount: "15%off",
      oldPrice: "₹1,59,999",
      fAssured: false,
    },
    {
      id: 3,
      name: "Apple iPhone 16 Pro Max (Gold, 256 GB)",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMRzzWkH8tEuGPMCvj-fzRJCzVaOBIm2KE5Kvpd_HE_KsMrk4V7hd5Ao1XevKbWcSqw2lxNIzmmbpZ28295eX9_oFgvYlF0K1gVad3IO6J8y3TMZeyyX3rh1XIDmLxcD9F0QCdveSueg&usqp=CAc",
      rating: "4.7",
      ratings: "2,20,206 Ratings & 7,324 Reviews",
      bestSeller: true,
      price: "₹1,59,999",
      discount: "15%off",
      oldPrice: "₹1,79,999",
      fAssured: false,
    },
  ];
  return products?.map((products, id) => (
    <div className="product" key={products?.id}>
      <div className="prod-img">
        {(products?.bestSeller)? <h4>Bestseller</h4>: <p/> }
        <img
          src={products?.image}
          alt="Iphone"
        />
      </div>
      <input type="checkbox" />
      <div className="prod-details">
        <h3>{products?.name}</h3>
        <h5>
        {products?.rating} <span>&#9733;</span>
        </h5>
        <h4>{products?.ratings}</h4>
        <li>128 GB ROM</li>
        <li>15.49 cm (6.5 inch) Super Retina XDR Display</li>
        <li>48MP + 12MP + 12MP Front Camera</li>
        <li>1 year warrenty for phone </li>
      </div>
      <div className="prod-price">
        <h2>{products?.price}</h2>
        {(products?.fAssured)? <img src="./public/download.jpg"/>: <h4></h4> }
        <br />
        <h3>{products?.oldPrice}</h3>
        <p>{products?.discount}</p>
        <br />
        <h5>Free delivery</h5>
        <h6>Save extra with combo offers</h6>
        <h4>Upto ₹30,000 Off on Exchange</h4>
      </div>
      <div className="prod-compare">
        <input type="checkbox" id="compare" value="check" />
        <label for="compare">Add to Compare</label>
      </div>
    </div>
  ));
}
