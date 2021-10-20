import React from 'react';
import cataracts2 from '../../../../images/cataracts/cataracts2.jpg'

const Cataracts2 = () => {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col-lg-4 col-md-6 col-12 mx-auto">
                    <img className="img-fluid w-60" src={cataracts2} alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mx-auto mb-3">
                    <h1>What are the symptoms of Trachoma?</h1>
                    <p className="fs-5">The most common signs that a person is suffering from trachoma include:
                    </p>
                    <ol className="text-start">
                        <li>Discharge from the eyes.</li>
                        <li>Irritated eyes</li>
                        <li>Redness</li>
                        <br />
                        <h5>Because the infection spreads via hands, clothes and bedding, it disproportionately affects women and children: globally women are almost two (1.8) times more likely than men to be blinded by the disease. If trachoma is not treated, it can lead to trichiasis.</h5>
                    </ol>
                </div>
            </div>
        </div >
    );
};

export default Cataracts2;