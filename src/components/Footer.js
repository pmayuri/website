import React from 'react';
import { Link } from 'react-router-dom';
import {Button } from './Button';
import './Footer.css' ;

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    lorem epsum has unique style
                </p>
                <p className='footer-subscription-text'>
                     you can unsubscribe 
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                className='footer-input'

                            type='email'
                            name='email'
                            placeholder='Your Email'
                        />

                        <Button buttonStyle='btn--outline'>
                            Subscribe
                         </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>ABOUT US</h2>
                        <Link to='./sign-up'>how it works</Link>
                        <Link to='./'>testimonial</Link>
                        <Link to='./'>invest </Link>
                        <Link to='./'>careers</Link>
                        <Link to='./'>terms of service</Link>
                    </div>
                        <div className='footer-link-items'>
                       <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
           </div>

 <section class='social-media'>
        <div class='social-media-wrap'>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>





        </div>
    )
}

export default Footer;

