import AuthorizationControl from "../AuthorizationControl/AuthorizationControl";

export default function AuthorizationsTable() {
    return (
        <div className="overflow-x-auto w-4/6">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr >
              <th className="bg-main"></th>
              <th className="bg-main text-white">Name</th>
              <th className="bg-main text-white">Email</th>
              <th className="bg-main text-white" >Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Fernando</td>
              <td>Fer@gmail.com</td>
              <td>
                <AuthorizationControl/>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="">
              <th>2</th>
              <td>Marcos</td>
              <td>Benjamin@gmail.com</td>
              <td>
              <AuthorizationControl/>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Chris</td>
              <td>Chris@gmail.com</td>
              <td>
              <AuthorizationControl/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        );
  }
  