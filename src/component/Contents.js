import React from 'react';

function Content(){
    return (
        <div className="ui vertical stripe segment">
                <div className="ui container">
                    <h3 className="ui dividing header">Best Rated Hotels</h3>

                    <div className="ui link cards centered">
                        <div className="card">
                            <div className="image">
                                <img
                                    src="https://r-cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&amp;o=" />
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
                                <img
                                    src="https://q-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&amp;o=" />
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
                                <img
                                    src="https://q-cf.bstatic.com/xdata/images/hotel/max500/48243386.jpg?k=9891532fb6d24d301b65659650e79812c426f46de905fba30bb8a8c5fea52d85&amp;o=" />
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
export default Content;