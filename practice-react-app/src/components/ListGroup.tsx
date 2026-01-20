import { Fragment } from "react";

function ListGroup() {
  const city=["Delhi","Mumbai","Bangalore","Chennai","Kolkata"];
  
  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          {city.map(item=><li key={item}>{item}</li>)} 

        </ul>
    </Fragment>
  );
  
}
export default ListGroup;
