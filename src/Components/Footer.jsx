import React,{Fragment} from 'react'
import './Footer.css'
import { sendFeedback, sendRequest } from '../BackEnd/UtilFunctions'
export default function Footer() {

    const contactFields = () =>{
      return(
        <Fragment>
        <h4>  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://hunbalsiddiqui.com/" target="_blank" rel="noopener noreferrer">Hunbalsiddiqui.com</a> </h4>
      
      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg>  hunbal.dha@gmail.com</h4>
      
      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://github.com/HunbalSiddiqui" target="_blank" rel="noopener noreferrer">github.com/HunbalSiddiqui</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.linkedin.com/in/muhammad-hunbal-siddiqui-5913261a7/" target="_blank" rel="noopener noreferrer">Linkedin</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.facebook.com/hunbal.siddiqui13/" target="_blank" rel="noopener noreferrer">Facebook</a> </h4>

      <h4><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
      </svg> <a href="https://www.instagram.com/hunbalsiddiqui/" target="_blank" rel="noopener noreferrer">Instagram</a> </h4>
      </Fragment>
      )
    }

    const dropdownInput = () =>{
      return(

        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
  </div>
  <select className="custom-select" id="chooseCategory">
    <option value=''>Choose...</option>
    <option value="RockingRed">RockingRed</option>
    <option value="RelialeBlue">RelialeBlue</option>
    <option value="FertileGreen">FertileGreen</option>
    <option value="HappyYellow">HappyYellow</option>
    <option value="BalancedGray">BalancedGray</option>
    <option value="BeFunky">BeFunky</option>
  </select>
  <input type="text" className="form-control colorCode" placeholder="ColorCode" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
      )
    }


    const contactUs = () =>{
      return (
        <Fragment>
<button type="button" className="btn btn-success footerBtn" data-toggle="modal" data-target="#contact">
  <h3>Connect With Me</h3>
</button>

<div className="modal fade" id="contact" tabIndex="-1" role="dialog" aria-labelledby="contact" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Connect with me</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {contactFields()}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
</Fragment>
      )
    }

    return (
        <nav className="navbar navbar-light bg-dark flex footer">
   {/* FEEDBACK*/}
<button type="button" className="btn btn-success footerBtn" data-toggle="modal" data-target="#exampleModalCenter">
  <h3>FeedBack</h3>
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">FeedBack</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input type="text" className="form-control name"  aria-label="" aria-describedby="basic-addon1" placeholder="Name"/>
        <input type="text" className="form-control message"  aria-label="" aria-describedby="basic-addon1" placeholder="Message"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal"
        onClick={()=>{sendFeedback({
          Name : document.querySelector('.name').value.trim(),
          Message : document.querySelector('.message').value.trim()
        })}}>Send Feedback</button>
      </div>
    </div>
  </div>
</div>


{/* REQUEST */}

<button type="button" className="btn btn-info footerBtn" data-toggle="modal" data-target="#request">
  <h3>Request a new color code</h3>
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="request" tabIndex="-1" role="dialog" aria-labelledby="request" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Request a new color code</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {
          dropdownInput()
        }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal"
        onClick={()=>{sendRequest({
          Category : document.querySelector('#chooseCategory').value.trim(),
          colorCode : document.querySelector('.colorCode').value.trim()
        })}}>Send Request</button>
      </div>
    </div>
  </div>
</div>




{/* CONTACTUS */}
{contactUs()}
        </nav>

    )
}
