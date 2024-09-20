import { useState } from 'react'
import './assets/style/css/style.css'
import Footer from './footer'

function App() {

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
          <div className="panorama">
            <div className="imageNumber"></div>
            <div className="imageNumber"></div>
            <div className="imageNumber"></div>
            <div className="imageNumber"></div>
          </div>
        </section>
      </header>
      <main>
        <section>
          <div>
            
          </div>
          <div>
            <h2>Why Lease with D&M?</h2>
          </div>
          <div>
            <h2>How Does Leasing Work?</h2>
          </div>
          <div>
          <h2>WELCOME TO D&M LEASING</h2>
          </div>
          <div>
            <h2>Important Things to Consider</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
