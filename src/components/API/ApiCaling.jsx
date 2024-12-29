// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const ApiCaling = () => {
  const [data, setData] = useState(null);
  //   const callingData = async () => {
  //     let url = "https://jsonplaceholder.typicode.com/posts";
  //     let res = await axios.get(url);
  //     console.log(res);
  //     const posts = res.data;
  //     setData(posts);
  //   };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json()) // Corrected this line to properly parse the JSON
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error); // Add error handling
    //   });
    (async () => {
      await callingData();
    })();
  }, []);
  const callingData = async () => {
    let url = "https://mern07ecommerce.azimemil.xyz/api/v1/ProductBrandList";
    let res = await axios.get(url);
    let posts = res.data.data;
    setData(posts);
  };

  console.log(data);
  return (
    <div>
      {data !== null ? (
        <div>
          {data.map((item) => (
            <div key={item}>
              <img src={item["brandImg"]} alt="" className="h-full w-full" />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default ApiCaling;
