import React, { useState, useEffect  } from 'react';

import Axios from 'axios';


function Insert() {
const [postId, setPostId] = useState("");
const [userId, setUserId] = useState("");
const [expirationDate, setexpirationDate] = useState("");
const [groupLimit, setgroupLimit] = useState("");
const [paymentMethod, setpaymentMethod] = useState("");
const [categoryId, setcategoryId] = useState("");

const [postList, setpostList] = useState([])

useEffect(() => {
  Axios.get('http://localhost:3001/post/read').then((response)=> {
    setpostList(response.data)
    console.log(response.data);
  });

});

const updatePost = () => {
  Axios.post('http://localhost:3001/post/update', {
    postId: postId,
    userId: userId,
    expirationDate: expirationDate,
    groupLimit: groupLimit,
    paymentMethod: paymentMethod,
    categoryId: categoryId
  }).then(() => {
    alert('successfully update');
    setpostList([...postList, {postId: postId, userId: userId, expirationDate: expirationDate}])
  });
};

const deletePost = (id) => {
  Axios.delete(`http://localhost:3001/post/delete/${id}`);
}

  return (
    <div className="Insert">
      <h1>Update Information</h1>
      
      {/* <h1>Posts</h1> */}
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

        <button onClick={updatePost}>Update</button>

        {postList.map((val)=> {
          return (
          <div className = "card">
            <h1>Post Id: {val.postId}</h1>
            <p>User Id: {val.userId}</p>
            <p>Expiration Date: {val.expirationDate} </p>
            <p>Group Limit: {val.groupLimit} </p>
            <p>Payment Method: {val.paymentMethod} </p>
            <p>Category Id: {val.categoryId} </p>


            <button onClick={() => {deletePost(val.postId)}}>Delete</button>
            {/* <input type = "text" id = "updateInput"/>
            <button>Update</button> */}
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default Insert;
