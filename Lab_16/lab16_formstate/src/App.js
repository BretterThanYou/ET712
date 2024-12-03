import './App.css';
import { useState } from 'react';

function App() {
  //OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  //Function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
    <h1>Brett Hirsch</h1>
      <div className='info'>
        <p><b>Cat (Felis catus)</b>, commonly referred to as the domestic pet or house cat</p>
        <button className='readmorebtn' onClick={openreadmore}>{isOpen ? "Hide" : "Read More"}</button>
      </div>
      <section>
        {
          isOpen &&
        <div className='readmore'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        }
      </section>

      <form>
        <fieldset>
          <legend>
            <label for="username">Enter a name: </label>
              <input type='text' id='username' placeholder='Type your name'/>
          </legend>
        </fieldset>
      </form>



    </div>
  );
}

export default App;
