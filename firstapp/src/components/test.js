
function Bike(props){
    return <li>{props.brand}</li>
}
function House(){
    const bikes=[
        {id:1,brand:'bajaj'},{id:2,brand:'suzuki'}
    ]
    return(
        <>
            <ul>
                {bikes.map((bik)=><Bike key={bik.id} brand={bik.brand}/>)}
            </ul>
        </>
    );
}
export default House;