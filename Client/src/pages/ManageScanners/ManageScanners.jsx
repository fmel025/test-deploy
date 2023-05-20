import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"
import ScannersTable from "../../components/ScannersTable/ScannersTable"

function ManageScanners() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mt-5 mb-10">Asignar validadores</h1>
          <SearchBar/>
          <ScannersTable />
          
        </Layout>
    )
  }
  
  export default ManageScanners
  