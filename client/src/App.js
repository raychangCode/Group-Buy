import React, { useState} from 'react';

// , useEffect 
import './App.css';
import Axios from 'axios';


function App() {
const [postId, setPostId] = useState("");
const [userId, setUserId] = useState("");
const [expirationDate, setexpirationDate] = useState("");
const [groupLimit, setgroupLimit] = useState("");
const [paymentMethod, setpaymentMethod] = useState("");
const [categoryId, setcategoryId] = useState("");

const submitReview = () => {
  Axios.post('http://localhost:3001/api/insert', {
    postId: postId, 
    userId: userId,
    expirationDate: expirationDate, 
    groupLimit: groupLimit,
    paymentMethod: paymentMethod, 
    categoryId: categoryId
  }).then(() => {
    alert('successful insert');
  });
};

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="form">
        {/* post id */}
        <label>Post Id:</label>
        <input 
        type = "text" 
        name = "postId" 
        onChange={(e) => {
          setPostId(e.target.value);
        }}
        />
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
          setexpirationDate(e.target.value)
        }}
        />

        {/* groupLimit */}
        <label>Group Limit:</label>
        <input 
        type = "text" 
        name = "groupLimit" 
        onChange={(e) => {
          setgroupLimit(e.target.value)
        }}
        />

        {/* groupLimit */}
        <label>Payment Method:</label>
        <input 
        type = "text" 
        name = "paymentMethod" 
        onChange={(e) => {
          setpaymentMethod(e.target.value)
        }}
        />

        {/* groupLimit */}
        <label>Category Id:</label>
        <input 
        type = "text" 
        name = "categoryId" 
        onChange={(e) => {
          setcategoryId(e.target.value)
        }}
        />


        
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
