

//get time using date method
export function GetHour(h){
  let greeting;
  if(h>=0&&h<=11){
    greeting="Good morning";
  }
  else if(h>11&&h<=15){
    greeting="Good afternoon";
  }
  else if(h>15&&h<=19){
    greeting="Good evening";
  }
  else{greeting="Good night";}
  return greeting;
}


//get day of the week 

export function GetDay(d){
  switch(d){
    case 0:return "Sunday"
    case 1:return "Monday"
    case 2:return "Tuesday"
    case 3:return "Wednesday"
    case 4:return "Thursday"
    case 5:return "Friday"
    case 6:return "Saturday"
    default: return "none"
  }
}


//get month of the year
export function GetMonth(m){
    switch(m){
        case 0:return "January"
        case 1:return "February"
        case 2:return "March"
        case 3:return "April"
        case 4:return "May"
        case 5:return "June"
        case 6:return "July"
        case 7:return "August"
        case 8:return "September"
        case 9:return "October"
        case 10:return "November"
        case 11:return "December"
        default: return "none"
      }

}