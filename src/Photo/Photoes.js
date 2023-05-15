import React from "react";
import { useEffect, useState } from "react";
import SinglePhoto from "./SinglePhoto";
import {startTransition} from "react";
export default function Picture() {

    const [picture, setPicture] = useState([]);
    // const [isPending, startTransition] = useTransition();
    const FetchAll = () => {
        let x = fetch("https://jsonplaceholder.typicode.com/photos");
        x.then(Response => Response.json()).then(data => setPicture(data)
        ).catch(er => console.log(er))
    }

    useEffect(() => {

    }, [picture])

    return (
        <div>
            <input type=" button" value="getPicture" onClick={() => { FetchAll() }} />
            <h2>All Picture</h2>
            <ul>
                {picture.map(item => {
                    return (
                        <li key={item.id}>

                            <SinglePhoto picture={item} />
                        </li>

                    )
                })}
            </ul>
        </div>
    );
}
