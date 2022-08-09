import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import About from "./About"
import Header from "./Header"



function App() {
  return (
    <div className="App">
      <Header name="Joe's Awesome Blog"/>
      <About about={"This is a really cool blog created by a really cool dude."} image="https://lh3.googleusercontent.com/rh7JiX9Jb7Zx_RXfo87mazWVxd6_Muonqn-4RsOZERyp4PZvJIwXPIW31MgssNk3kltoPlU-5csBbZCQnLL5Y0Npi_UL3gt9twFgQFBUY3zyvqCkV7wcVRmFuPSK9SU8FG0IAdhVviPXwFHtCBto1D7_-CJAqexDdcqpZnXQ2TY4L7DwWv3Q6ITcPAylqSCeEG1GruxjA_tgEOOKw_916-PUxmz-V-BpF2A-Os5C2MrmlvBm9JSSzCiMAd_xJ2Wwuyu8jyeNh6rd3hzNmNshjyNRgtrtWOnPheH5mTiiViy249j61R-W0-GSaEUICumv4SRAP_NEZhBxAsndL792qlHnnoJXjzP4f3FKfYgju9MC4l2FasKgQnL2D-nc7toNa4Rn0bEi5DzdanGZ7w3pD3C8kloo7dz4d1PotrsuHX_2KR5WaTpAq3T2Mte89KLgDpfKNxylWjXQv8lQhU114nUFQ_EoGu3su1gq3xrBLLLIZC84hYGeBL_Yiu5kIKkfYdRwkV18NBR1p5a-wsZ6a2M6QM2AQ2qT26aFgz2acmECk4RortdtURzMoWUNavn6mKFt6Sr-vVdyTpaXDD6ZlcLuwvrx7QQ6NV6giRULANS4Yw_tVCG_tkOkXiX_5liKKYtXl5M2frEv6mD6y2rQN1tH_xG9_dim3NoYBKNVUwSyX9lBy_pyVYYWfHkdYyByvZJ_tkU6FvyJKWoljs-hhh6Bx-E6w-cidzlglLqw0-I9kLVAc8p9rTZmODXEFG4=w1768-h1270-no?authuser=0"/>
    <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
