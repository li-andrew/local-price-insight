import { useState } from "react";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState<string>("");
  const [radius, setRadius] = useState<number>(0);
  const [productName, setProductName] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  // Since we plan to use a lot of public & free APIs for different stores, we might consider using RapidAPI to easily connect to all of the APIs with a single API key.
  // For this example, I'll be using the API below:
  // https://rapidapi.com/MicroAPI/api/target-com-shopping-api/
  // I'll be creating my own API for target, and wrap up/use a combination of:
  //  nearby_stores (zipcode, radius, limit) => list of stores near specified zip code
  //  product_search (storeid, keyword, limit) => list of products based on keyword
  //  product_details (targetProductId from product_search, storeid) => detailed product information
  //  potentially have to use product_fulfillment to check stock of each store
  const handleSearch = async () => {};

  return (
    <div>
      <div>
        <label>Location: </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Radius (in miles): </label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Product Name: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Search Target Stores</button>

      <div>
        <h2>Search Results</h2>
        {results.length === 0 && <div>Results is []</div>}
        {results.map((result, index) => (
          <div key={index}>
            <h3>{result.storeName}</h3>
            <p>Price: ${result.price}</p>
            <p>In Stock: {result.inStock ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
