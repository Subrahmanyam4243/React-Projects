





let TableProps=(props)=>{
    let styles={
        border:"1px solid black"
    }


    return(
        <table style={{
            border:styles.border
        }}>
            {props.children}
        </table>
    )
}
export default TableProps