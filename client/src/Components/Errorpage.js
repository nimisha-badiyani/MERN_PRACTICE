import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>Error:404</h1>
                    </div>
                    <h2 className="mb-5">We are sorry, page not found</h2>
                <NavLink to ="/">Back To Homepage</NavLink>
                </div>
            </div> 
        </>
    )
}

export default Errorpage;
