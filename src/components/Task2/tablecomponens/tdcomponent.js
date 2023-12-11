

import cellsdata from "./tabledata";

const [{ companyname: firstCompanyName, contact: firstContact, country: firstCountry },
    { companyname: secondCompanyName, contact: secondContact, country: secondCountry },
    { companyname: thirdCompanyName, contact: thirdContact, country: thirdCountry },
    { companyname: fourthCompanyName, contact: fourthContact, country: fourthCountry }] = cellsdata;


export const HeaderData=()=>{
    let header={
        backgroundColor: "lightblue",
    }
    return(
        <>
        <th style={header}>COMPANY NAME</th>
        <th style={header}>CONTACT</th>
        <th style={header}>COUNTRY</th>
        </>
    )
}
export const RowOneData=()=>{
    return(
        <>
        <td>{firstCompanyName}</td>
        <td>{firstContact}</td>
        <td>{firstCountry}</td>
        </>
    )
}
export const RowTwoData=()=>{
    return(
        <>
        <td>{secondCompanyName}</td>
        <td>{secondContact}</td>
        <td>{secondCountry}</td>
        </>
    )
}

export const RowThreeData=()=>{
    return(
        <>
        <td>{thirdCompanyName}</td>
        <td>{thirdContact}</td>
        <td>{thirdCountry}</td>
        </>
    )
}
export const RowFourData=()=>{
    return(
        <>
        <td>{fourthCompanyName}</td>
        <td>{fourthContact}</td>
        <td>{fourthCountry}</td>
        </>
    )
}