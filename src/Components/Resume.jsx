import React from "react";

const Resume = () => {
  return (
    <section className="page p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Resume</h1>
      <h4 className="text-xl mb-8 text-primary">5 Years of Experience</h4>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Education</h2>
            {[{
              year: '2019',
              name: 'Fronted Development',
              company: 'University of Studies',
              desc:
                'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            }, {
              year: '2018',
              name: 'Graphics Design',
              company: 'University of Studies',
              desc:
                'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
            }].map(({year, name, company, desc}) => (
              <div key={year} className="mb-6 border-b border-base-300 pb-4">
                <h4 className="text-lg font-semibold">{year}</h4>
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="italic text-primary">{company}</p>
                <p className="mt-2 text-base-content/80">{desc}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Experience</h2>
            {[{
              year: '2020 - Current',
              name: 'Lead Software Engineer',
              company: 'Google',
              desc:
                'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.',
            }, {
              year: '2016 - 2020',
              name: 'Senior Software Engineer',
              company: 'Facebook',
              desc:
                'Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.',
            }, {
              year: '2013 - 2016',
              name: 'Junior Software Engineer',
              company: 'Amazon',
              desc:
                'Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.',
            }].map(({year, name, company, desc}) => (
              <div key={year + name} className="mb-6 border-b border-base-300 pb-4">
                <h4 className="text-lg font-semibold">{year}</h4>
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="italic text-primary">{company}</p>
                <p className="mt-2 text-base-content/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-12">
          {/* Design Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Design Skills</h2>
            {[
              { name: 'Web Design', percent: 95 },
              { name: 'Print Design', percent: 65 },
              { name: 'Logo Design', percent: 80 },
              { name: 'Graphics Design', percent: 90 },
            ].map(({ name, percent }) => (
              <div key={name} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span>{name}</span>
                  <span>{percent}%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={percent}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>

          {/* Coding Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Coding Skills</h2>
            {[
              { name: 'JavaScript', percent: 90 },
              { name: 'MongoDB', percent: 70 },
              { name: 'Python', percent: 60 },
              { name: 'React/Redux', percent: 50 },
              { name: 'Angular', percent: 75 },
            ].map(({ name, percent }) => (
              <div key={name} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span>{name}</span>
                  <span>{percent}%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={percent}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
