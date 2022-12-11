import * as React from "react";
import TimelineCard from "../Components/TimelineCard";

const data = [
  {
    title: "Azad University - Tehran",
    year: "2010 - 2015",
    content: "Computer Engineering - Software Development",
  },
  {
    title: "Dezful University - Khuzestan",
    year: "2008 - 2010",
    content: "Software ",
  },
];

const Educations: React.FC = () => {
  return (
    <section>
      <div className="inner">
        <h1 className="section-title">Education</h1>
        <div className="timeline">
          {data.map((item, index) => {
            return (
              <TimelineCard>
                <h4 className="row-title">{item.title}</h4>
                <small style={{opacity: 0.6}}>{item.year}</small>
                <p>{item.content}</p>
              </TimelineCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Educations;
