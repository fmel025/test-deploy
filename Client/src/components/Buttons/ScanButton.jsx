import QRCode from "react-qr-code";

export default function ScanButton() {
  return (
    <div>
      <button className="btn join-item bg-main hover:bg-darker-main text-white font-bold" onClick={() => window.my_modal_1.showModal()}>
        Validar
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            // Aca podemos pasar el valor que tendra nuestro QR uwu
            // By now tenemos un video de referencia
            value={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            viewBox={`0 0 256 256`}
          />
          <div className="modal-action">
            <button className="btn">Cerrar</button>
          </div>
        </form>
      </dialog>
    </div>

  );
}