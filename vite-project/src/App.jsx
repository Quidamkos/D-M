import { useState } from 'react'
import './assets/style/css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <section className='header-content'>
          <nav>
            <p>logo</p>
            <ul>
              <li>NEW CARS</li>
              <li>PRE-OWNED CARS</li>
              <li>FINANCE</li>
              <li>LEASE VS BUY</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
          <h1>Leasing From D&M</h1>
          <button>FIND A CAR</button>
        </section>
      </header>
      <main>
        <section className="section"></section>
        <section className="section"></section>
        <section className="section"></section>
        <section className="section"></section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
