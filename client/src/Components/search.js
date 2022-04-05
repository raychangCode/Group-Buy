import React, { useState } from "react";
import Axios from 'axios';
import './search.css';

function SearchPost() {
  const [productName, setProductName] = useState("");
  const [searchPostList, setSearchPostList] = useState([]);
  const [userName, setPostId] = useState("");
  const [userId, setUserId] = useState("");
  const [expirationDate, setexpirationDate] = useState("");
  const [numOfPost, setnumOfPost] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [averageGroupLimit, setaverageGroupLimit] = useState("");

  const searchPost = async () => {
    const response = await Axios.post("http://localhost:3001/post/search/?s=" + productName, {
      productName: productName,
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
              <h1>Product name: {val.productName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  )
}


export default SearchPost;
