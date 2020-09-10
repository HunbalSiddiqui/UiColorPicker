import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <nav class="navbar navbar-light bg-dark flex footer">
          <button type="button" class="btn btn-primary footerBtn"><h3>Support</h3></button>
          <button type="button" class="btn btn-info footerBtn"><h3>FeedBack</h3></button>
          <button type="button" class="btn btn-success footerBtn"><h3>Contact</h3></button>
        </nav>
    )
}
