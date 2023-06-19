import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRScanner() {
    const [data, setData] = useState('No result');

    const handleScan = (result, error) => {
        if (result) {
            setData(result);
        }

        if (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className='text-2xl text-main font-bold text-center'>QR Scanner</h1>
            <div className='card w-72 h-fit'>
                <QrReader onResult={handleScan} />
            </div>

            <h2 className='text-xl text-main font-bold text-center'>Result</h2>
            <p>{data}</p>
        </>
    );
}

export default QRScanner;
