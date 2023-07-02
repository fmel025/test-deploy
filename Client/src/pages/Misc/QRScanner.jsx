import Layout from '../../components/Navigation/Layout/Layout';
import QRScannerCard from '../../components/Misc/QRScannerCard';

function QRScanner() {

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText);
    console.log(decodedResult);
  };

  return (
    <Layout>
      <h1 className='text-2xl text-main font-bold text-center'>QR Scanner</h1>
      <QRScannerCard
        fps={1}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </Layout>
  );
}

export default QRScanner;
