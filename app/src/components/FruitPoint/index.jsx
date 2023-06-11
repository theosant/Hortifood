import React, { useState } from 'react';
import './index.css'

const FruitPoint = ({width, heigth}) => {
    const styles = {
        fruit_point: {
            width: `${width}px`,
            height: `${heigth}px`,
        },
    };

    const [fruitPoint, setFruitPoint] = useState(1);
    const handleFruitPointChange = (event) => {
        setFruitPoint(event.target.value);
    };

    return (
        <div>
            <div className="labels_for_slider">
                <p className="verde">Verde</p>
                <p className="ao_ponto">Ao ponto</p>
                <p className="madura">Madura</p>
            </div>

            <input type="range"
                className="fruit_point"
                style={styles}
                name="rangeInput"
                min={0} max={2} step={1}
                value={fruitPoint}
                onChange={handleFruitPointChange}
                >
            </input>
        </div>
    );
};  

export default FruitPoint;