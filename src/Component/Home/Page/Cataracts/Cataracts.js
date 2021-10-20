import React from 'react';
import cataract1 from '../../../../images/cataracts/cataracts1.jpg'

const Cataracts = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mx-auto">
                    <h1 className="fs-1">What is Trachoma?</h1>
                    <p className="fs-5">Trachoma is the world’s leading infectious cause of blindness, and is part of a group of conditions known as neglected tropical diseases (often referred to as NTDs).</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <img className="img-fluid w-60" src={cataract1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cataracts;