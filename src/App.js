import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, } from 'react-icons/fi';
import data from './data';
import Review from './Review';

function App() {
  const [people, setPeople] = useState(data);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000)
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return <Review key={person.id} {...person} position={position} />;
        })}
        <button onClick={() => setIndex(index - 1)}><FiChevronLeft className='prev' /></button>
        <button onClick={() => setIndex(index + 1)}><FiChevronRight className='next' /></button>
      </div>
    </section >
  );
}

export default App;
