import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <nav class="navbar navbar-light bg-dark flex footer">
          {/* <button type="button" class="btn btn-primary footerBtn"><h3>Support</h3></button>
          <button type="button" class="btn btn-info footerBtn"><h3>FeedBack</h3></button>
          <button type="button" class="btn btn-success footerBtn"><h3>Contact</h3></button>  */}
   {/* FEEDBACK*/}
<button type="button" class="btn btn-primary footerBtn" data-toggle="modal" data-target="#exampleModalCenter">
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




        </nav>

    )
}
