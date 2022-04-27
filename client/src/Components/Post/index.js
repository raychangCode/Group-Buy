import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './Post.css';
import { useParams } from "react-router-dom";

// function Post() {
  // const [postId, setPostId] = useState("");
  // const [expirationDate, setExpirationDate] = useState("");
  // const [groupLimit, setGroupLimit] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [productName, setProductName] = useState("");
  // const [storeName, setStoreName] = useState("");
  // const [price, setPrice] = useState("");
  // const [link, setLink] = useState("");
  // const [searchPostList, setSearchPostList] = useState([]);


  const PostComponent = (props) => {
    const {id} = useParams()
    console.log(useParams())
    const [state,setState] = useState({ 

    })
    console.log(state)
    useEffect(()=> {
      if (id)
      Axios.get("http://localhost:3001/post/" + id, {
    }).then((response)=>{
      setState(response.data?.[0])
    }).catch((err)=>{
      console.error(err)
    })    
    },[id])
    return (
      <div>
        <h1>{
          `${state.storeName} ${state.productName}`
          }</h1>
        <div>
          <h3>Initiator: {state.initiator}</h3>
          <h3>Price: {state.price}</h3>
          <h3>Payment:{state.paymentMethod} </h3>
          <h3>Group Limit: {state.groupLimit} </h3>
          <h3>Link: {state.link} </h3>
        </div>
        <div>
          <h3>Current Group Member</h3>
          <ol>
            <li>
              <h5>Ken</h5>
            </li>
          </ol>
        </div>
        <div>
          <h3>Average Price: </h3>
          <h5>$2.94 / person</h5>
        </div>
        <div>
          <button>Join</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    )
  //   const response = await Axios.post("http://localhost:3001/post/search/?s=" + productName, {
  //     postId: postId,
  //     expirationDate: expirationDate,
  //     groupLimit: groupLimit,
  //     paymentMethod: paymentMethod,
  //     productName: productName,
  //     storeName: storeName,
  //     price: price,
  //     link: link
  //   });
  //   setSearchPostList(response.data)

  // };


  // return (
  //   <div className="Post">
  //     <br></br>
  //     <div class="search-wrap">
  //       <input placeholder="Search product name"
  //         type="text"
  //         name="s"
  //         onChange={(e) => {
  //           setProductName(e.target.value)
  //         }}
  //       />
  //       <button onClick={searchPost}>Search</button>
  //     </div>

  //     <div className="PostListSearch">

  //       <div class="card-container">
  //         {searchPostList.map((val) => {
  //           return (
  //             <div className="card2">
  //               <h5>Product name: {val.productName}</h5>
  //               <h5>Store Name: {val.storeName}</h5>
  //               <h5>Price: {val.price}</h5>
  //               <h5>Link: <a href={val.link} target="_blank" rel="noopener noreferrer"> Click me!</a></h5>
  //               <h5>Payment Method: {val.paymentMethod}</h5>
  //               <h5>Group Limit: {val.groupLimit}</h5>
  //               <h5>Expiration Date: {val.expirationDate}</h5>
  //               {/* <button onClick={() => {deletePost(val.postId)}}>Delete</button> */}
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // )
  
}


export default PostComponent;