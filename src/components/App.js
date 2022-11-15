import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import About from "../components/About"


console.log(blogData);

function App() {
 
  return (
    <div className="App">
      <Header name="Underreacted" />;
      <About image={blogData.image} about={blogData.about} />;
      <ArticleList blogData={blogData.posts} />
    </div>
  );
}

export default App;
