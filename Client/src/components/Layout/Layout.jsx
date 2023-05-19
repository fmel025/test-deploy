const Layout = ( {children}) => {
    return(
    <div className="flex flex-col items-center h-screen bg-background  overflow-x-hidden ">
    {children}
    </div>
    )
}

export default Layout