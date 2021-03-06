import React, { useEffect, useState } from 'react';
import Treatment from '../Treatment/Treatment';

const Treatments = () => {
    const [treatments, setTreatments] = useState([])
    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])
    return (
        <div className="container">
            <h1 className="text-warning mt-4">Treatment for EYEs that we provide</h1>
            <div className="row">
                {
                    treatments.map(treatment => <Treatment
                        treatment={treatment}
                        key={treatment.id}
                    ></Treatment>)
                }
            </div>
        </div>
    );
};

export default Treatments;