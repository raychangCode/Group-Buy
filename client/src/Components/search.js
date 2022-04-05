import React, { useState } from "react";
import Axios from 'axios';
import './search.css';

function SearchPost() {
  const [expirationDate, setExpirationDate] = useState("");
  const [groupLimit, setGroupLimit] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [searchPostList, setSearchPostList] = useState([]);


  const searchPost = async () => {
    const response = await Axios.post("http://localhost:3001/post/search/?s=" + productName, {
      expirationDate: expirationDate,
      groupLimit: groupLimit,
      paymentMethod: paymentMethod,
      productName: productName,
      storeName: storeName,
      price: price,
      link: link
    });
    setSearchPostList(response.data)
  };


  return (
    <div className="SearchPost">
      <input placeholder="Search product name"
        type="text"
        name="s"
        onChange={(e) => {
          setProductName(e.target.value)
        }}
      />
      <button onClick={searchPost}>Search</button>

      <div className="PostListSearch">
        {searchPostList.map((val) => {
          return (
            <div className="card">
              <h5>Product name: {val.productName}</h5>
              <h5>Store Name: {val.storeName}</h5>
              <h5>Price: {val.price}</h5>
              <h5>Link: {val.link}</h5>
              <h5>Payment Method: {val.paymentMethod}</h5>
              <h5>Group Limit: {val.groupLimit}</h5>
              <h5>Expiration Date: {val.expirationDate}</h5>
            </div>
          );
        })}
      </div>
    </div>
  )
}


export default SearchPost;
