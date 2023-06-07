import Layout from "../../components/Navigation/Layout/Layout"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"
import ScannersTable from "../../components/Tables/Table/ScannersTable"
import { IconAlertCircleFilled } from "@tabler/icons-react"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"


function ManageScanners() {

  return (
    <>
      <Layout>
      <h1 className="text-5xl font-bold text-main mt-5 mb-10">Asignar validadores</h1>
      <SearchBar />
      <ScannersTable />
      <div className="alert alert-info md:hidden text-center items-center flex flex-row w-4/5 mt-5">
        <IconAlertCircleFilled className=" text-lg" />
        <span className="md:hidden">Para asignar validadores deslize la tabla a la izquierda</span>
      </div>
      </Layout>
      <ImprovedNavbar/>
    </>
  )
}

export default ManageScanners
