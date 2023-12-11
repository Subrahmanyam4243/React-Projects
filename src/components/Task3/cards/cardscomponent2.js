import { array } from "./apidata"


import "./cardsstyle.css"
//create cards without using bootstrap, use external css
let CardsDisplay=()=>{
    return(
        <div id="maindiv">
            { array.map(val=>{
            return(
                <div className="div">
                    <img className="image" src={val["thumbnail"]} alt={val["title"]}/>
                    <div >
                        <h5 >{val["title"]}</h5>
                        <p >{val["description"]}</p>
                        <h6>Rating: {val["rating"]}</h6>
                        <h6>Price: {val["price"]}</h6>
                        <button>BUY NOW</button>
                    </div>
            </div>
            )
        })}
        </div>
    )
}
export default CardsDisplay