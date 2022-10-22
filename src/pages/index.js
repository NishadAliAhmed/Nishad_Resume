import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO,
} from '../components';
import resume from '../../data/profile';
import '../main.css';
import Download from '../components/download';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <React.Fragment>
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
        <Summary data={resume.summary} />
        <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
          <div className="lg:w-2/3 lg:pr-8">
            {resume.experience && <Experience data={resume.experience} />}
            {resume.certifications && <Projects data={resume.certifications} />}
          </div>
          <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
            {resume.skills && <Skills data={resume.skills} />}
            {resume.education && <Education data={resume.education} />}
            {resume.sidebar &&
              resume.sidebar.map(item => (
                <List key={`${item.title}-side`} data={item} />
              ))}
          </div>
        </div>
      </React.Fragment>
      <Footer social={resume.social} />
      <Download />
    </div>
  </main>
);

export default Home;
