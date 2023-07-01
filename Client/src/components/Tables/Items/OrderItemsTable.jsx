export default function OrderItemsTable() {
    return (
        <div className="overflow-x-auto w-3/5">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr >
              <th className="bg-main"></th>
              <th className="bg-main text-white">Localidad</th>
              <th className="bg-main text-white" >Precio</th>
              <th className="bg-main text-white" >Cantidad</th>
              <th className="bg-main text-white" >Total</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>VIP</td>
              <td>$12</td>
              <td>3</td>
              <td>$36</td>
            </tr>
            {/* row 2 */}
            <tr className="">
              <th>2</th>
              <td>Premium</td>
              <td>$20</td>
              <td>1</td>
              <td>$20</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Estandar</td>
              <td>$5</td>
              <td>4</td>
              <td>$20</td>
            </tr>  
            {/* row 5 */}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td>$76</td>
            </tr>
          </tbody>
        </table>
      </div>
        );
  }
  