import React from 'react';

function Content2(){
    return(
        <div className="ui vertical stripe segment">
                <div className="ui container">
                    <h3 className="ui dividing header">Popular Destinations</h3>

                    <div className="ui link cards centered">
                        <div className="card">
                            <div className="image">
                                <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
                            </div>
                            <div className="content">
                                <div className="header">Matt Giampietro</div>
                                <div className="meta">
                                    <a>Friends</a>
                                </div>
                                <div className="description">
                                    Matthew is an interior designer living in New York.
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    Joined in 2013
                                </span>
                                <span>
                                    <i className="user icon"></i>
                                    75 Friends
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
                            </div>
                            <div className="content">
                                <div className="header">Molly</div>
                                <div className="meta">
                                    <span className="date">Coworker</span>
                                </div>
                                <div className="description">
                                    Molly is a personal assistant living in Paris.
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    Joined in 2011
                                </span>
                                <span>
                                    <i className="user icon"></i>
                                    35 Friends
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" />
                            </div>
                            <div className="content">
                                <div className="header">Elyse</div>
                                <div className="meta">
                                    <a>Coworker</a>
                                </div>
                                <div className="description">
                                    Elyse is a copywriter working in New York.
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    Joined in 2014
                                </span>
                                <span>
                                    <i className="user icon"></i>
                                    151 Friends
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}
export default Content2;