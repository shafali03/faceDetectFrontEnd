
import React from 'react';
import './FaceRecognition.css';

// receive imageUrl
const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute ma3'>
                <img id='inputimage' alt='' src={imageUrl} width='300px' height='auto' />
                <div className='bounding_box'
                    style={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol
                    }}>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition