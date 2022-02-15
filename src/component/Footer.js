import React from 'react';

function Footer(){
    return(
        <div className="ui inverted vertical footer segment">
        <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                    <h4 className="ui inverted header">About</h4>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Sitemap</a>
                        <a href="#" className="item">Contact Us</a>
                        <a href="#" className="item">Cancellation Policy</a>
                        <a href="#" className="item">Terms and Conditions</a>
                    </div>
                </div>
                <div className="three wide column">
                    <h4 className="ui inverted header">Services</h4>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Hotels bookings</a>
                        <a href="#" className="item">Flight reservations</a>
                        <a href="#" className="item">Car rentals</a>
                    </div>
                </div>
                <div className="seven wide column">
                    <h4 className="ui inverted header">Booking Engine</h4>
                    <p>Our hotels, cars rental and flight tickets rates are the best in the industry. Give us a
                        chance to serve for you.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;