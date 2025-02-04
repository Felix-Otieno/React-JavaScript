import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello React!!</h1>
    <p>Hello</p>

  <table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>John</td>
  </tr>
  <tr>
  <td>Elsa</td>
  </tr>
  </table>

  <h1>React is { 5 + 5 } times better with JSX.</h1>

  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  <div>
    <h1>One header.</h1>
    <h1>Two headers.</h1>
  </div>

  <>
  <p>paragraph 1.</p>
  <p>paragraph 2.</p>
  </>
    <App />
  </StrictMode>
)
