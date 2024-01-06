"use client";

const Category = ({onSelectCategory, selectedCategory}) => {
  const categories = ["All", "Programming", "Technology", "Health", "Travel"];

  return (
    <div className="flex flex-row space-x-10 justify-center my-10">
      {categories.map((category) => (
        <h1
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`cursor-pointer ${
            selectedCategory === category ? "bg-blue-200 rounded px-5" : ""
          }`}
        >
          {category}
        </h1>
      ))}
    </div>
  );
};

export default Category;
