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
            <div class="content-wrapper">
                <div class="content-main animate">
                    <div class="container">
                        <div class="center count-down animate" data-countdown-year="2018" data-countdown-month="12" data-countdown-day="21"></div>
                        <h1 class="font-size-90">Get Ready!</h1>
                        <h2 class="opacity-60">Something Awesome is Coming Soon</h2>
                    </div>
                </div>
                <div class="background-wrapper">
                    <canvas id="background-content"></canvas>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;