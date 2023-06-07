
import Layout from "../../components/Navigation/Layout/Layout"
import EmployeeNavbar from "../../components/Navigation/Navbar/EmployeeNavbar"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"
import UserStatusTable from "../../components/Tables/Table/UserStatusTable"
import { IconAlertCircleFilled } from "@tabler/icons-react"


function ManageUsers() {

  return (
    <>
      <Layout>
        <h1 className="text-5xl font-bold text-main mt-5 mb-10">Administrador de usuarios</h1>
        <SearchBar />
        <UserStatusTable />
        <div className="alert alert-info md:hidden text-center items-center flex flex-row w-4/5 mt-5">
          <IconAlertCircleFilled className=" text-lg" />
          <span className="md:hidden">Para asignar roles deslize la tabla a la izquierda</span>
        </div>
      </Layout>
      <EmployeeNavbar />
    </>
  )
}

export default ManageUsers
