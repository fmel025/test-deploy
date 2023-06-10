export default function CountersButton() {
    return (
      <div className="flex justify-center items-center ">
                    <button className="btn btn-primary bg-main rounded-none">+</button>
                    <button className="btn btn-primary w-3/12 bg-main rounded-none hover:cursor-default no-animation hover:bg-main">5</button>
                    <button className="btn btn-primary bg-main rounded-none">-</button>
            </div>
    );
  }
  