import { useState, FC, useEffect, useRef } from 'react';


import './App.css';

const peoples = [
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },
  { name: 'Alex', budget: 5000, id: 1 },
  { name: 'Alon', budget: 51000, id: 2 },
  { name: 'John', budget: 50, id: 3 },
  { name: 'serg', budget: 4010, id: 5 },
  { name: 'petr', budget: 10000, id: 4 },
  { name: 'ivan', budget: 10500, id: 6 },
  { name: 'ilon', budget: 45000, id: 7 },
  { name: 'hary', budget: 500, id: 8 },
  { name: 'yacobs', budget: 200, id: 10 },

]

function useIntersectionObserver<T extends HTMLElement>() {

  const ref = useRef<HTMLDivElement>(null)

  const [isVisible, setVisible] = useState<boolean>(false)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setVisible(entry.isIntersecting)

    
    

  }

  const options = {
    root: document.querySelector('.header'),
    rootMargin: "0px",
    threshold: 0.7
  }

  useEffect(() => {

    const observer = new IntersectionObserver(callbackFunction, options)

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [])


  return {
    ref,
    isVisible
  }
}


const App: FC = () => {

  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  useEffect(() => {

    console.log(isVisible ? 'элемент в зоне видимости' : 'не виден')



  }, [isVisible])

  return (
    <div className="App">


<div className="header">LIST</div>

      <div className='list'>
        
        
        <div ref={ref} className='list-target'>

          {peoples.map(item => (
            <p >
              {item.id}: {item.name} --- {item.budget}
            </p>
          ))}


        </div>




      </div>







    </div>
  );
}

export default App;
