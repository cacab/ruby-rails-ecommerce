import React, { useState} from 'react'
import ReactDOM from 'react-dom'
import './../../assets/stylesheets/main.css'
import logo from './../../assets/images/logo.png'




const App = props => {

  const [tasks] = useState(['laundry', 'shopping']);
  return (
      <div>
          <div> <img src={logo} alt="Logo" />;</div>

        <h1>CC's Intrepid Designs</h1>
        <ul>{tasks.map((task, index) => <li key={index}>{task}</li>)}</ul>

      </div>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App />,
      document.body.appendChild(document.createElement('div')),
  )
})