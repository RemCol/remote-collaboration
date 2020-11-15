import React from 'react';
import "./Classes.css";
import Class from "./Class";

function Classes() {
    return (
        <div className="classes">
            {/*Classes details*/}
            <div className="classes__row">
            <Class
                id="/mrgreg"
                subject="Mathematics"
                teacher="Mr.Greg Smith"
                bg="https://www.toronto.ca/wp-content/uploads/2019/04/910c-city-planning-exhibition-place-cultural-heritage-landscape-assessment--500x329.jpg"
                pp="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg"
            />
            <Class
                id="/mrvictor"
                subject="Physics"
                teacher="Mr. Victor Wong"
                bg="https://www.toronto.ca/wp-content/uploads/2019/04/910c-city-planning-exhibition-place-cultural-heritage-landscape-assessment--500x329.jpg"
                pp="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg"
            />
            <Class
                id="/mskaur"
                subject="Biology"
                teacher="Ms. Kaur Singh"
                bg="https://www.toronto.ca/wp-content/uploads/2019/04/910c-city-planning-exhibition-place-cultural-heritage-landscape-assessment--500x329.jpg"
                pp="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg"
            />
            </div>

            <div className="class__row">
            <Class
                id="/mryves"
                subject="French"
                teacher="Mr. Yves Legault"
                bg="https://www.toronto.ca/wp-content/uploads/2019/04/910c-city-planning-exhibition-place-cultural-heritage-landscape-assessment--500x329.jpg"
                pp="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg"
            />
            </div>
        </div>
    );
}

export default Classes;
