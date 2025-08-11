import React, { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    name: "SoundCloud Audio",
    category: "SoundCloud",
    img: "/src/assets/images/1.jpg",
    icon: "volume-high",
  },
  {
    id: 2,
    name: "Media Project 1",
    category: "Media",
    img: "/src/assets/images/2.jpg",
    icon: "film",
  },
  {
    id: 3,
    name: "Vimeo Video 1",
    category: "Vimeo Videos",
    img: "/src/assets/images/3.jpg",
    icon: "videocam",
  },
  {
    id: 4,
    name: "Media Project 2",
    category: "Media",
    img: "/src/assets/images/4.jpg",
    icon: "film",
  },
  {
    id: 5,
    name: "Mockup Design 1",
    category: "Mockups",
    img: "/src/assets/images/5.jpg",
    icon: "image",
  },
  {
    id: 6,
    name: "YouTube Video 1",
    category: "YouTube Videos",
    img: "/src/assets/images/6.jpg",
    icon: "videocam",
  },
];

const filterCategories = [
  "All",
  "Media",
  "Mockups",
  "SoundCloud",
  "Vimeo Videos",
  "YouTube Videos",
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="page p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
      <h4 className="text-xl mb-6 text-primary">My Works</h4>

      <ul className="tabs tabs-boxed mb-8 justify-center flex-wrap">
        {filterCategories.map((cat) => (
          <li
            key={cat}
            className={`tab ${filter === cat ? "tab-active" : ""} cursor-pointer`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="card bg-base-200 shadow hover:shadow-lg transition duration-300"
          >
            <figure>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="flex items-center space-x-2 text-primary">
                <ion-icon name={item.icon}></ion-icon>
                <span>{item.category}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
