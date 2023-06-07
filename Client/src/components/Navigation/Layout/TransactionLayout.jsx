
function TransactionLayout({children}) {
  return (
        <div className="w-{360} flex flex-col items-center">
            <div className="flex flex-col h-96 gap-y-7 overflow-auto">
                {children}
            </div>
        </div>
  )
}

export default TransactionLayout