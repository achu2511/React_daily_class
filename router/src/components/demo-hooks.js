import React,{ useState ,event} from "react";

const Demo=()=>
{
    const[movie,Setmovie]=useState({
        movie:"KGF 2",
        Rating:9.8,
        Ticket: 500
    });

    const Update=()=>{
        Setmovie({
        movie:"Kantara",
        Rating:9.9,
        Ticket:800
        })
    }


    return(
        <>
            <h2>The Movie name is {movie.movie}</h2>
            <h2>The Rating is {movie.Rating}</h2>
            <h2>The Ticket Price is {movie.Ticket}</h2>
            <button onClick={()=>{Update()}}>Click Me</button>
        </>
    )
}
export default Demo;