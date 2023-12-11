import TableDataComponent from "./TableDataComponent"
import TableHeaderComponent from "./TableHeaderComponent"







const Row=()=>{
    return(
        <>
        <tr>
            <TableHeaderComponent />
        </tr>
        <tr>
            <TableDataComponent/>
        </tr>
        </>
    )
}
export default Row