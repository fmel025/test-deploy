import React, { useRef } from 'react';
import QRCode from "react-qr-code";

export default function ScanButton() {
  // create a reference for the dialog
  const modalRef = useRef();

  const handleClick = () => {
    // open the modal when the button is clicked
    modalRef.current.showModal();
  };

  return (
    <div>
      <button className="btn btn-sm join-item bg-main hover:bg-darker-main text-white font-bold" onClick={handleClick}>
        Validar
      </button>
      <dialog id="my_modal_1" ref={modalRef} className="modal">
        <form method="dialog" className="modal-box w-64">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            viewBox={`0 0 256 256`}
            title={"QR Code"}
          />
          <div className="modal-action">
            <button className="btn">Cerrar</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
