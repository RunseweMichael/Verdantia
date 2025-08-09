import React from 'react'

export default function Contact() {
  return (
    <div className='contactContainer'>
        <div className='container'>
            <div className='row'>
                <div class='col-sm-8 mx-auto mt-3 pt-2 pb-5 justify-content-center align-items-center text-shadow-none'>
                  <h2 className='text-success fw-bold text-center titles py-3 mt-5'>📞 CONTACT US</h2>
                    <form action={'#'} method={'POST'} className='form needs-validation' noValidate>
                        <div class="form-floating mb-4">
                            <input type="text" class="form-control text-secondary" id="floatingInpu1t" required/>
                            <label for="floatingInput1" className="text-dark">Full-Name</label>
                            <div class="valid-feedback">
                              Looks good!
                            </div>
                            <div class="invalid-feedback">
                              Please add your Name.
                            </div>
                        </div>

                        <div class="form-floating mb-4">
                            <input type="number" class="form-control text-secondary" id="floatingInput2" required/>
                            <label for="floatingInput2" className="text-dark">Phone Number</label>
                            <div class="valid-feedback">
                              Looks good!
                            </div>
                            <div class="invalid-feedback">
                              Please add a valid Phone Number.
                            </div>
                        </div>

                        <div class="form-floating mb-4">
                            <input type="email" class="form-control" id="floatingInput" required />
                            <label for="floatingInput" className="text-dark text-lg">Email Address</label>
                            <div class="valid-feedback">
                              Looks good!
                            </div>
                            <div class="invalid-feedback">
                              Please provide a valid Email.
                            </div>
                        </div>

                        <div class="form-floating mb-4">
                            <textarea class="form-control" id="floatingTextarea2" style={{height: 150}} required></textarea>
                            <label for="floatingTextarea2" className="text-dark">Comments</label>
                            <div class="valid-feedback">
                              Looks good!
                            </div>
                            <div class="invalid-feedback">
                              Please provide your Comments.
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                        <button type="submit" className="btn  btn-outline-success btn-lg fw-bolder" style={{backdropFilter: 'blur(30px)', fontSize:'1.5rem'}}>SUBMIT</button>
                        </div>
                    </form>
                </div>
        </div>
      </div>
    </div>
  )
}
