import React, { useState } from "react";
import Axios from 'axios';
import './search.css';

function SearchPost() {
    const [productName, setProductName] = useState("");

const searchPost = () => {
    Axios.post('http://localhost:3001/post/search', {
      productName: productName
    }).then(() => {
      alert('successful search');
    //   setpostList([...postList, {postId: postId, userId: userId, expirationDate: expirationDate}])
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
