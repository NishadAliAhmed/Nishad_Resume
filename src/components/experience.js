import React from 'react';

const Experience = ({ data }) => (
  <section>
    {console.log(data)}
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <ul className="py-6" style={{listStyleType: "disc", padding: "1 rem", paddingLeft: "3rem"}}>
            {item.description.map(des => {
              return <li key={des}>{des}</li>;
            })}
          </ul>
          <p style={{marginLeft: "3em"}}><span style={{fontWeight: "700", color: "#485263"}}>Tools & Technologies Used :</span> {item.technologies}</p>
        </article>
      ))}
  </section>
);

export default Experience;
