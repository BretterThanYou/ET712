import './App.css';
import { useState } from 'react';

function App() {
  //OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  //Function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(!isOpen)
  }

  // setState for 'form'
  const[inputs, setInput] = useState({})

  // function to capture the input username

  /*const capturename = function(e){
    setName(e.target.value)
  }*/

  //function to submit the form
  const submitform = function(e){
    e.preventDefault()
    alert(`Welcome to React form ${inputs.username} \n Your age is ${inputs.age}`)
  }

  // function to collect all the values in the form
  const handlechange = function(e){
    const name = e.target.name
    const value = e.target.value
    setInput(values => ({...values, [name]:value}))
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

      <form onSubmit={submitform}>
        <fieldset>
          <legend>User information</legend>
            <label for="username">Enter a name: </label>
              <input 
              type='text' 
              id='username'
              name='username'
              placeholder='Type your name...'
              value={inputs.username}
              onChange={handlechange}
              />
              <label for="age">Enter an age: </label>
              
              <input
               type='number'
               name='age'
               id='age'
               value={inputs.age}
               onChange={handlechange}
              />
          {/*Submit button*/}
          <div>
            <input type='submit'/>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
