
import React from "react";
import Article from "../components/Article"

// const { default: blogData } = require("../data/blog");


function ArticleList({blogData}) {
    const articles = blogData.map((article) => { 
      return  <Article    title={article.title} 
                    date={article.date} 
                    preview={article.preview}
                    key={article.id}
                    />;
                        });
    
    return (
    <main>{articles}</main>
    )
}

export default ArticleList;
