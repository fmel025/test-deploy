
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"
import AuthorizationsTable from "../../components/AuthorizationsTable/AuthorizationsTable"
import { IconAlertCircleFilled } from "@tabler/icons-react"
import ImprovedNavbar from "../../components/Navbar/ImprovedNavbar"


function ManageAuthorizations() {

  return (
    <>
      <Layout>
        <h1 className="text-5xl font-bold text-main mt-5 mb-10">Administrador de usuarios</h1>
        <SearchBar />
        <AuthorizationsTable />
        <div className="alert alert-info md:hidden text-center items-center flex flex-row w-4/5 mt-5">
          <IconAlertCircleFilled className=" text-lg" />
          <span className="md:hidden">Para asignar roles deslize la tabla a la izquierda</span>
        </div>
      </Layout>
      <ImprovedNavbar />
    </>
  )
}

export default ManageAuthorizations
