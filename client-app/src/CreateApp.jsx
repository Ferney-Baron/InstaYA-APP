import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function CreateApp() {
  return (
    <>
      <NavBar />

      <main>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">Date</label>
            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className='d-flex'>
            <div className="input-group mb-3 mx-2">
              <span className="input-group-text">W</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>
            <div className="input-group mb-3 mx-2">
              <span className="input-group-text">H</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>
            <div className="input-group mb-3 mx-2">
              <span className="input-group-text">L</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>
          </div>
          <div className='d-flex'>
            <div className='d-flex align-items-center'>
              <label htmlFor="weight" className='mx-2'>Weight</label>
              <input type="number" className="form-control" id='weight' aria-label="Amount (to the nearest dollar)" />
            </div>
            <div className='d-flex  align-items-center mx-5'>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
              <label className="form-check-label" for="flexCheckChecked">
                Sensitive Merchandise
              </label>
            </div>
          </div>
          <div className='d-flex'>
            <div className='d-flex align-items-center mt-3'>
              <label htmlFor="address" className='mx-2'>Address</label>
              <input type="number" className="form-control" id='address' aria-label="Amount (to the nearest dollar)" />
            </div>
            <div className='d-flex align-items-center mt-3'>
              <label htmlFor="city" className='mx-2'>City</label>
              <input type="text" className="form-control" id='city' aria-label="Amount (to the nearest dollar)" />
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </>
  )
}
