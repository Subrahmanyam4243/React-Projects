
import Obj from "./items";


const ListItems=()=>{
    const {list1,list2,list3,img1,img2,img3,Dimensions}=Obj;
    return(
        <>
        <li>{list1}</li><img src={img1} alt="coffee" width={Dimensions} height={Dimensions}/>
        <li>{list2}</li><img src={img2} alt="tea" width={Dimensions} height={Dimensions}/>
        <li>{list3}</li> <img src={img3} alt="milk" width={Dimensions} height={Dimensions}/>
        </>
    )
}
export default ListItems