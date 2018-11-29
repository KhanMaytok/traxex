import React, { Component } from 'react';

class Home extends Component {
    render() {
      return (
        <div class="page-wrapper">
            <header>
                <div class="brand animate"><a href=""><img src="assets/img/logo.png" alt="" /></a></div>
                <nav>
                    <ul class="navigation animate">
                        <li><a href="" data-toggle="modal" data-target="#modal-about-us">About Us</a></li>
                        <li><a href="" data-toggle="modal" data-target="#modal-our-works">Our Works</a></li>
                        <li><a href="" data-toggle="modal" data-target="#modal-services">Services</a></li>
                        <li><a href="" data-toggle="modal" data-target="#modal-contact-us">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
      );
    }
  }
  
  export default Home;