import React, { useState, useEffect  } from 'react';
import './Insert.css';
import Axios from 'axios';


function Insert() {
  const [userId, setUserId] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [groupLimit, setGroupLimit] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");

  const submitPost = async () => {
    await Axios.post('http://localhost:3001/post/insert', {
      userId: userId,
      expirationDate: expirationDate,
      groupLimit: groupLimit,
      paymentMethod: paymentMethod,
      categoryId: categoryId,
      productName: productName,
      storeName: storeName,
      price: price,
      link: link
    }).then(() => {
      alert('successfully insert');
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/post/delete/${id}`);
  }

    return (
      <div className="Insert">
        <h1>Create Information</h1>

        {/* <h1>Posts</h1> */}
        <div className="form">
          {/* user id */}
          <label>User Id:</label>
          <input
          type = "text"
          name = "userId"
          onChange={(e) => {
            setUserId(e.target.value)
          }}
          />

          {/* expirationDate */}
          <label>Expiration Date:</label>
          <input
          type = "text"
          name = "expirationDate"
          onChange={(e) => {
            setExpirationDate(e.target.value)
          }}
          />

          {/* groupLimit */}
          <label>Group Limit:</label>
          <input
          type = "text"
          name = "groupLimit"
          onChange={(e) => {
            setGroupLimit(e.target.value)
          }}
          />

          {/* groupLimit */}
          <label>Payment Method:</label>
          <input
          type = "text"
          name = "paymentMethod"
          onChange={(e) => {
            setPaymentMethod(e.target.value)
          }}
          />

          {/* groupLimit */}
          <label>Category Id:</label>
          <input
          type = "text"
          name = "categoryId"
          onChange={(e) => {
            setCategoryId(e.target.value)
          }}
          />

          {/* post name */}
          <label>Product Name:</label>
          <input
          type = "text"
          name = "productName"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          />

          {/* store name */}
          <label>Store Name:</label>
          <input
          type = "text"
          name = "storeName"
          onChange={(e) => {
            setStoreName(e.target.value);
          }}
          />

          {/* price */}
          <label>Price:</label>
          <input
          type = "number"
          name = "price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          />

          {/* link */}
          <label>Link:</label>
          <input
          type = "text"
          name = "link"
          onChange={(e) => {
            setLink(e.target.value);
          }}
          />

          <button onClick={submitPost}>Submit</button>
        </div>
      </div>
    );
}

export default Insert;
