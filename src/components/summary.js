import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
        src="./Nishad.jpg"
        alt="profile"
      />
    </div>
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      {data}
    </p>
    
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      <b>Seeking an entry-level position in Frontend Web Development and completed my web development course & internship at Edureka as a MERN stack developer.</b>
    </p>
    
  </section>
);

export default Summary;
