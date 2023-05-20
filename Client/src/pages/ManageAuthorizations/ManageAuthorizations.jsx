
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"
import AuthorizationsTable from "../../components/AuthorizationsTable/AuthorizationsTable"


function ManageAuthorizations() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mt-5 mb-10">Administrador de usuarios</h1>
          <SearchBar/>
          <AuthorizationsTable />
          
        </Layout>
    )
  }
  
  export default ManageAuthorizations
  