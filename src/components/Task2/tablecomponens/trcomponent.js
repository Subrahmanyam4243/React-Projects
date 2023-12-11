import { HeaderData, RowFourData, RowOneData, RowThreeData, RowTwoData } from "./tdcomponent"





let Border={
    border:"2px solid black",
}


const TableRow=()=>{
    return(
        <>
        <tr style={Border}>
            <HeaderData/>
        </tr>
        <tr style={Border}>
            <RowOneData/>
        </tr>
        <tr style={Border}>
            <RowTwoData/>
        </tr>
        <tr style={Border}>
            <RowThreeData/>
        </tr>
        <tr style={Border}>
            <RowFourData/>
        </tr>

        </>
    )
}
export default TableRow