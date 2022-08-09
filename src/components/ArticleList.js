import React from "react";
import Article from "./Article";

function ArticleList({posts}){

 let blogArray = posts.map(post=>{
    return (
            <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
    )
 })
return <main>{blogArray}</main>

}

export default ArticleList

//title date preview ID