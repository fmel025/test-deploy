import React, { useState, useEffect } from 'react';
import Layout from '../../components/Navigation/Layout/Layout';
import { QrReader } from 'react-qr-reader';
import ImprovedNavbar from '../../components/Navigation/Navbar/ImprovedNavbar';

function QRScanner() {
  const [data, setData] = useState('No result');
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraPermission(true);
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
        setCameraPermission(false);
      }
    };

    requestCameraPermission();
  }, []);

  const renderCameraAccessMessage = () => {
    if (cameraPermission === null) {
      return <p>Requesting camera permission...</p>;
    } else if (cameraPermission === false) {
      return <p>Camera access denied. Please allow camera access in your browser settings.</p>;
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <h1 className='text-2xl text-main font-bold text-center'>QR Scanner</h1>
      {renderCameraAccessMessage()}
      {cameraPermission === true && (
        <>
          <div className='card w-72 h-fit'>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: '100%' }}
              scanDelay={1500}
              constraints={{ facingMode: 'environment' }}
              videoStyle={{ borderRadius: '15' }}
            />
          </div>

          <h2 className='text-xl text-main font-bold text-center'>Result</h2>
          <p>{data}</p>
          <ImprovedNavbar />
        </>
      )}
    </Layout>
  );
}

export default QRScanner;
