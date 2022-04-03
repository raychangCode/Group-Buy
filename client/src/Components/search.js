import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './search.css';

function SearchPost() {
  const [productName, setProductName] = useState("");
  const [searchPostList, setSearchPostList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/post/search').then((response)=> {
      console.log(response.data);
      setSearchPostList(response.data)
    });
  });

  const searchPost = () => {
    Axios.post("http://localhost:3001/post/search/?s=" + productName, {
      productName: productName
    }).then(() => {
      alert('successfully search');
      setSearchPostList([...searchPostList, {productName: productName}])
    });
  };

  return (
    <div className="SearchPost">
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Posts"
            name="s"
            onChange={(e) => {
                setProductName(e.target.value)
              }}
        />
        <button onClick={searchPost}>Search</button>
        </form>

        <div className="PostList">
          {searchPostList.map((val)=> {
              return (
              <div className = "card">
                <h1>Product name: {val.productName}</h1>
              </div>
              );
          })}
        </div>
    </div>
  )
}


export default SearchPost;


// const SearchBar = () => (
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search Posts</span>
//         </label>
//         <input
//             type="text"
//             id="header-search"
//             placeholder="Search Posts"
//             name="s"
//             onChange={(e) => {
//                 setProductName(e.target.value)
//               }}
//         />
//         <button type="submit">Search</button>
//     </form>
// );

// const search = () => {
//     return (
//         <div>
//             <SearchBar />
//             <ul>
//                 {}
//             </ul>

//         </div>
//     )
// }
