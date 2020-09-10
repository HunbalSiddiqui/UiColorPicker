import React,{Fragment} from 'react'
import './Footer.css'
export default function Footer() {

    const contactFields = () =>{
      return(
        <Fragment>
        <h4>  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://hunbalsiddiqui.com/" target="_blank">Hunbalsiddiqui.com</a> </h4>
      
      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg>  hunbal.dha@gmail.com</h4>
      
      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://github.com/HunbalSiddiqui" target="_blank">github.com/HunbalSiddiqui</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.linkedin.com/in/muhammad-hunbal-siddiqui-5913261a7/" target="_blank">Linkedin</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.facebook.com/hunbal.siddiqui13/" target="_blank">Facebook</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.instagram.com/hunbalsiddiqui/" target="_blank">Instagram</a> </h4>
      </Fragment>
      )
    }

    const dropdownInput = () =>{
      return(

        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="RockingRed">RockingRed</option>
    <option value="RelialeBlue">RelialeBlue</option>
    <option value="FertileGreen">FertileGreen</option>
    <option value="HappyYellow">HappyYellow</option>
    <option value="BalancedGray">BalancedGray</option>
    <option value="BeFunky">BeFunky</option>
  </select>
  <input type="text" class="form-control" placeholder="ColorCode" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
      )
    }


    const contactUs = () =>{
      return (
        <Fragment>
<button type="button" class="btn btn-success footerBtn" data-toggle="modal" data-target="#contact">
  <h3>Connect With Me</h3>
</button>

<div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="contact" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Connect with me</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {contactFields()}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
</Fragment>
      )
    }

    return (
        <nav class="navbar navbar-light bg-dark flex footer">
          {/* <button type="button" class="btn btn-primary footerBtn"><h3>Support</h3></button>
          <button type="button" class="btn btn-info footerBtn"><h3>FeedBack</h3></button>
          <button type="button" class="btn btn-success footerBtn"><h3>Contact</h3></button>  */}
   {/* FEEDBACK*/}
<button type="button" class="btn btn-success footerBtn" data-toggle="modal" data-target="#exampleModalCenter">
  <h3>FeedBack</h3>
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">FeedBack</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" placeholder="Name"/>
        <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" placeholder="Message"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* REQUEST */}

<button type="button" class="btn btn-info footerBtn" data-toggle="modal" data-target="#request">
  <h3>Request new color codes</h3>
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="request" tabindex="-1" role="dialog" aria-labelledby="request" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Request new color code</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {
          dropdownInput()
        }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Send Request</button>
      </div>
    </div>
  </div>
</div>




{/* CONTACTUS */}
{contactUs()}
        </nav>

    )
}
