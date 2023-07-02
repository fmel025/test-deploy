import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

const createConfig = (props) => {
  let config = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

function QRScannerCard(props) {
  useEffect(() => {
    const config = createConfig(props);
    const verbose = props.verbose === true;

    if (!props.qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);

    const onScanSuccess = async (decodedText, decodedResult) => {
      // Stop the scanner
      await html5QrcodeScanner.pause(true);

      // Call the success callback
      props.qrCodeSuccessCallback(decodedText, decodedResult);

      // Wait for 5 seconds
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Restart the scanner
      html5QrcodeScanner.render(onScanSuccess, props.qrCodeErrorCallback);
    };

    html5QrcodeScanner.render(onScanSuccess, props.qrCodeErrorCallback);


    return () => {
      html5QrcodeScanner.clear().catch(error => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [props]);

  return (
    <div id={qrcodeRegionId} className='w-full md:3/5' />
  );
}


export default QRScannerCard