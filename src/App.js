
import FormComponent from "./components/Task2/formcomponents/form-component";
import UnOrderd from "./components/Task2/listcomponents/parentlist3-component";
import MainTable from "./components/Task2/tablecomponens/tbcomponent";
import Table from "./components/Task3/Tables/tablecomponents";
import DisplayCards from "./components/Task3/cards/cardscomponent";
import CardsDisplay from "./components/Task3/cards/cardscomponent2";
import Forms from "./components/Task3/forms/formcomponet";
import Button from "./components/Task4/buttoncomponent";
import GetGreeting from "./components/Task4/date";
import Text from "./components/Task4/textcomponent";
import UnOrderedList from "./components/list-components/parentlist-components";
import  OrderedList from "./components/list-components/parentlist2-component";
import TableComponents from "./components/table-components/TableComponents";
import {GetHour,GetDay,GetMonth } from "./components/Task4/date";
import ButtonComponent from "./components/task5/buttoncomponent";
import TableProps from "./components/Task4/Table-Components/tableprops";
import RowComponent from "./components/Task4/Table-Components/rowcomponent";
import array from "./components/Task4/Table-Components/rowcomponent";
import CarouselComponent from "./components/task5/carousels/carouselcomponent";
import ElectronicCards from "./components/task5/cards-state/electroniccomponent";
import ApiProducts from "./components/Task6/PRODUCTSAPI/apiproducts";
import DemoCarousel from "./components/task7/carouselcomponent";
import MountingPhase from "./components/task7/lifecycle.js/mountingphase";
import UpdatingPhase from "./components/task7/lifecycle.js/updating";
import UnmountPhase from "./components/task7/lifecycle.js/unmountphase";
import DeveloperRoles from "./components/Task9/devleoperole";
import AddImage from "./components/Task8/addimagecarousel";






function App() {
  let hour=new Date().getHours()
  let day=new Date().getDay()
  let month=new Date().getMonth()
  let daydate=new Date().getDate()
  let year=new Date().getFullYear()
  return (
    <div>
      {/* <DisplayCards/>
      <Table/>
      <Forms/> */}
      {/* <CardsDisplay/> */}
      {/* <Button buttonprops={{text:"Size1",width:200,pad:5,color:"white" }} /><br/><br/>
      <Button buttonprops={{text:"Size2",width:170,pad:5,color:"white"}}  /><br/><br/>
      <Button buttonprops={{text:"Size3",width:130,pad:5,color:"white"}} /><br/><br/>
      <Button buttonprops={{text:"Size4",width:100,pad:5,color:"white"}} /><br/><br/>
      <Button buttonprops={{text:"Size5",width:70,pad:5,color:"white"}} /><br/><br/>
      <Button buttonprops={{text:"Size6",width:50,pad:5,color:"white"}} />
      <Text greet={GetHour(hour)} day={GetDay(day)} month={GetMonth(month)} date={daydate} year={year}
      color={"green"} /> */}
      {/* <ButtonComponent/> */}
      {/* <TableProps>
        {array.map((ele) =>{
            let styles={
              border:"1px solid black"
          }
      
          return (
            <tr style={{
              border:styles.border
          }}>
              <td style={{
              border:styles.border
          }}>{ele["companyname"]}</td>
              <td style={{
              border:styles.border
          }}>{ele["contact"]}</td>
              <td style={{
              border:styles.border
          }}>{ele["country"]}</td>
            </tr>
          );
        })}
      </TableProps> */}
      {/* <CarouselComponent/>
      <ElectronicCards/>
      <ApiProducts/> */}
      {/* <DemoCarousel/> */}
      {/* <MountingPhase/> */}
      {/* <UpdatingPhase/> */}
      {/* <UnmountPhase/> */}
      {/* <AddImage/> */}
      <DeveloperRoles/>
      
    </div>
  );
}

export default App;

