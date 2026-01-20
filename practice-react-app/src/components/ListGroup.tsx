import { } from "react";
import { useState } from "react";
interface Props {city: string[];heading: string;}

function ListGroup({props: Props}) {
  let city=["Delhi","Mumbai","Bangalore","Chennai","Kolkata"];
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          {city.map(item=><li key={item}>{item}</li>)} 

        </ul>
    </>
  );
  
}
export default ListGroup;
