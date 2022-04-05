import React, { useState } from "react";
import Axios from 'axios';
import './search.css';

function Analysis() {
  const [searchPostList, setSearchPostList] = useState([]);
  const [userName, setPostId] = useState("");
  const [userId, setUserId] = useState("");
  const [numOfPost, setnumOfPost] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [NumberOfPost, setNumberOfPost] = useState("");

  const AdvSearch1 = async () => {
    const response = await Axios.post("http://localhost:3001/post/advsearch1", {
      userId: userId,
      userName: userName,
      numOfPost: numOfPost
    });
    setSearchPostList(response.data)
  };

  const AdvSearch2 = async () => {
    const response = await Axios.post("http://localhost:3001/post/advsearch2", {
      categoryId: categoryId,
      categoryName: categoryName,
      NumberOfPost: NumberOfPost
    });
    setSearchPostList(response.data)
  };

  return (
    <div className="Analysis">
      <div>
        <label>Top 15 users with most amount of Posts: </label>
        <button onClick={AdvSearch1}>Search</button>
      </div>

      <div>
        <label>Adv search: </label>
        <button onClick={AdvSearch2}>Search</button>
      </div>

      <div className="PostListSearch">
        {searchPostList.map((val) => {
          return (
            <div className="card">
              <h1>User ID: {val.userId}</h1>
              <h1>User name: {val.userName}</h1>
              <h1>Number of Post: {val.numOfPost}</h1>
            </div>
          );
        })}
      </div>
      <div className="PostListAdv1">
        {searchPostList.map((val) => {
          return (
            <div className="card">
              <h1>categoryId: {val.categoryId}</h1>
              <h1>categoryName: {val.categoryName}</h1>
              <h1>NumberOfPost: {val.NumberOfPost}</h1>
            </div>
          );
        })}
      </div>
    </div>
  )
}


export default Analysis;
