import './App.css';
import {useState} from 'react';


function App() {
  const messages = ["I think, therefore I am", "I have a dream!", "The only thing we have to fear is fear itself"]
  
  //set up an initial counter for the slice
  

  //set initial state
  const [counter, setCounter] = useState(1)

  return (
    <>
    <h1>Slice App by Brett Hirsch</h1>
    <section className='slicewrapper'>
      <div className='numberwrapper'>
        <div className={counter==1 ? "active":""}><p>1</p></div>
        <div className={counter==2 ? "active":""}><p>2</p></div>
        <div className={counter==3 ? "active":""}><p>3</p></div>
      </div>

      <p className='msg'>"{messages[counter-1]}"</p>
      <div className='btngroup'>
        <button onClick={function(){if(counter>1) setCounter(counter-1)}}>Previous</button>
        <button onClick={function(){if(counter<3) setCounter(counter+1)}}>Next</button>
      </div>
    </section>
    
    </>
  );
}

export default App;