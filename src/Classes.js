import React from 'react';
import "./Classes.css";
import Class from "./Class";

function Classes() {
    return (
        <div className="classes">
            {/*Classes details*/}
            <Class
                id="mrgreg"
                subject="mathematics"
                teacher="mrgreg"
                bg="https://www.toronto.ca/wp-content/uploads/2019/04/910c-city-planning-exhibition-place-cultural-heritage-landscape-assessment--500x329.jpg"
                pp="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg"
            />
        </div>
    );
}

export default Classes
