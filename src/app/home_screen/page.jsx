"use client";

import TopBar from "../component/topBar";
import Category from "../component/category";
import dummyArticles from "../data/dummydata";
import {useState} from "react";

const HomeScreen = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default: "All"
  const [articles] = useState(dummyArticles);

  const handleTitleChange = (newTitle) => {
    setPageTitle(newTitle);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div>
      <TopBar onTitleChange={handleTitleChange} />
      <h1>{pageTitle}</h1>

      <Category
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <div className="grid grid-cols-3 gap-6 p-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="border p-4 rounded-md shadow-md mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p>{article.content}</p>
            <p>Category: {article.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
