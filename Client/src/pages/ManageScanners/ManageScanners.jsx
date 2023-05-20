import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"
import UserStatusTable from "../../components/UserStatusTable/UserStatusTable"


function ManageScanners() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mt-5 mb-10">Administrador de usuarios</h1>
          <SearchBar/>
          <UserStatusTable/>
          
        </Layout>
    )
  }
  
  export default ManageScanners
  