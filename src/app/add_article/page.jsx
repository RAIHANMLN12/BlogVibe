"use client";
import React, {useState} from "react";

const ArticleForm = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row mt-[30px] space-x-10">
        <h1 className="text-xl font-bold">New Article</h1>
      </div>
      <textarea
        id="articleTitle"
        className="w-[600px] mt-[20px] overflow-hidden p-5 text-[16px] focus:outline-none"
        defaultValue={articleTitle || ""}
        onChange={(e) => setArticleTitle(e.target.value)}
        placeholder="Title"
        maxLength={100}
      />
      <textarea
        id="articleContent"
        className="w-[600px] h-[150px] overflow-hidden p-5 text-[14px] focus:outline-none"
        defaultValue={articleContent || ""}
        onChange={(e) => setArticleContent(e.target.value)}
        placeholder="Content"
        maxLength={5000}
      />
    </div>
  );
};

export default ArticleForm;
