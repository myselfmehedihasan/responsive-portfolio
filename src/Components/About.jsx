import React from "react";

const About = () => {
  return (
    <section className="page p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/3">
          <img
            src="/src/assets/images/hero.jpg"
            alt="Hero"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <p className="text-primary font-semibold uppercase">Web Developer</p>
          <h1 className="text-4xl font-extrabold">Mehedi Hasan</h1>
          <div className="space-y-2 text-base-content/80">
            <p>
              I'm a passionate web developer specializing in creating modern,
              responsive, and user-friendly websites. With expertise in HTML,
              CSS, and JavaScript, I craft seamless web experiences that bring
              ideas to life.
            </p>
            <p>
              Whether you're looking for a custom-built website or want to
              enhance your existing platform, I'm here to help. Let's
              collaborate and build something amazing together!
            </p>
          </div>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "storefront-outline",
              title: "Ecommerce",
              desc:
                "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
            },
            {
              icon: "reader-outline",
              title: "Copywriter",
              desc:
                "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
            },
            {
              icon: "desktop-outline",
              title: "Web Design",
              desc:
                "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
            },
            {
              icon: "file-tray-stacked-outline",
              title: "Management",
              desc:
                "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex space-x-4 bg-base-200 p-4 rounded-lg shadow-md"
            >
              <div className="text-primary text-4xl">
                <ion-icon name={icon}></ion-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-base-content/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-x-4"
            >
              <div className="flex-1">
                <blockquote className="italic text-base-content/70">
                  Nam tempor commodo mi id sodales. Aenean sit amet nibh nec
                  sapien consequat porta a sit amet diam.
                </blockquote>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <img
                  src={`/src/assets/images/testimonial-${num}.jpg`}
                  alt={`Testimonial ${num}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">STELLA</h4>
                  <p className="text-sm text-base-content/60">Web Developer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Clients</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/src/assets/images/client-${num}.png`}
              alt={`Client ${num}`}
              className="h-16 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
