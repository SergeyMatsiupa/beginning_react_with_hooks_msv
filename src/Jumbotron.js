import React from 'react';

function JumbotronComponent(props ) {
    return (
    <div>
        {/* <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron> */}
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">{props.children}</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
    );
}
export default JumbotronComponent;