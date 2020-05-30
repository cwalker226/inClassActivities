import React from 'react';

function HelloBootstrap() {
    return (<div className="container">
                <div className="navbar">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" href="#">Learn more</button>
                    </p>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>);
}

export default HelloBootstrap;
