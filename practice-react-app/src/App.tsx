import ListGroup from "./components/ListGroup"; 
function App(){
    let city=["Delhi","Mumbai","Bangalore","Chennai","Kolkata"];
    return(
        <div>
            <ListGroup city={city} heading="Cities"/>
        </div>
    );

}
export default App;