import React, { useState } from "react";
import { useEffect } from "react";
// import { axios } from "axios";

export default function FetchAllPosts() {
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log("useEffect render");
    }, [data])
   
    // const fetchAllPost = () => {
    //     const allPosts = axios.get("https://jsonplaceholder.typicode.com/photos");
    //     console.log(allPosts.data) ;  
    //      setData(allPosts.data)
    
    //     }
    
    const fetchTodos = () => {

console.log("i got to f");

        // try {
        //     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        //     const data = await response.json();
        //    setData(data)
        //    console.log(data)
        // } catch (error) {
        //     console.log(error);
        // }
    }


            return (<div>
                <h1>hellow</h1>
                <input type="button" onClick={()=>{fetchTodos()}}  value={"getPosts"}/>
                {/* <div>{data}</div> */}
            </div>
            )
        }