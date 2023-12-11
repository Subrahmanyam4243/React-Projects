


let Text=({greet,day,month,date,year,color})=>{
    
    return(
        <div>
            <h1 style={{color:color}}>Welcome, {greet} user, today date is {day},{month}{date},{year}  </h1>
        </div>
    )
}
export default Text