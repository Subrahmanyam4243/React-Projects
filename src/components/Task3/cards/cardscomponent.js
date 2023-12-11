import React from 'react';
import Cards from "./apidata"



//using bootstrap to create cards
const DisplayCards=()=>{
    return(
        <div className="d-flex justify-content-between gap-3 ">
            <Cards/>
        </div>
    )
}
export default DisplayCards
