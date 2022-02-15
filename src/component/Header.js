import React from 'react';

function Header(){
    return(
        <div className="ui inverted vertical masthead center aligned segment">

            <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <a className="active item">Flights</a>
                        <a className="item">Cars</a>
                        <a className="item">Hotels</a>
                        <div className="right item">
                            <a className="ui inverted button">Log in</a>
                            <a className="ui inverted button">Sign Up</a>
                        </div>
                    </div>
                </div>

            <div className="ui text container">
                    <h1 className="ui inverted header">
                        Booking Engine
                    </h1>
                    <p>Find your best flights.</p>
                    <div className="ui huge icon input">
                        <input type="text" placeholder="Search your iteninary."/>
                        <i className="search icon"></i>
                    </div>
                </div>

        </div>
    )
}
export default Header;