import React from "react";

const Blog = () => {
  return (
    <section className="page p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <h4 className="text-xl mb-6 text-primary">My Thoughts</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_1.jpg"
              alt="Blog 1"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">How to Start with Web Development</h4>
            <p>
              A beginner's guide to starting your journey as a web developer.
              Learn about essential tools and technologies.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>

        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_2.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">Tips for Writing Clean Code</h4>
            <p>
              Best practices to keep your code clean, maintainable, and
              scalable.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>

        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_3.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">Designing the Perfect Feature Comparison Table</h4>
            <p>
              Best practices to keep your code clean, maintainable, and
              scalable.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>
        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_1.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">Tips for Writing Clean Code</h4>
            <p>
              Best practices to keep your code clean, maintainable, and
              scalable.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>
        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_5.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">Tips for Writing Clean Code</h4>
            <p>
              Best practices to keep your code clean, maintainable, and
              scalable.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>
        <article className="card bg-base-200 shadow hover:shadow-lg transition duration-300">
          <figure>
            <img
              src="/src/assets/images/blog_post_6.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 hover:transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">Tips for Writing Clean Code</h4>
            <p>
              Best practices to keep your code clean, maintainable, and
              scalable.
            </p>
            <button className="btn btn-primary btn-sm mt-4">Read More</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;
