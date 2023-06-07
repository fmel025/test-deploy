export default function OrderDetailsTable() {
    return (
        <div className="overflow-x-auto w-3/5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr >
              <th className="bg-main"></th>
              <th className="bg-main text-white">Comprador</th>
              <th className="bg-main text-white">Fecha</th>
              <th className="bg-main text-white" >Numero de orden</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <th></th>
              <td>Chris Calderon</td>
              <td>5 de mayo</td>
              <td>239273</td>
            
            </tr>
          </tbody>
        </table>
      </div>
        );
  }
  