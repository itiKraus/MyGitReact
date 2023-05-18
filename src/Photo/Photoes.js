import React from "react";
import { useEffect, useState } from "react";
import SinglePhoto from "./SinglePhoto";
import {useTransition} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Picture() {

    const [picture, setPicture] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {

    }, [picture])
    const FetchAll = () => {

        startTransition(() => {
        let x=fetch("https://jsonplaceholder.typicode.com/photos");
          x.then(Response => Response.json()).then(data => setPicture(data)
           ).catch(er => console.log(er))
          })
    }

    return (
        <div>

    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary" onClick={() => { FetchAll() }}>GetPicture</Button>
    </Stack>
    
            <h2>All Picture</h2>
            {isPending?
            
            (
             
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <CircularProgress color="secondary" /><div>loading....</div>
  </Stack>
            ):(
            <ul>
                {picture.map(item => {
                    return (
                        <li key={item.id}>
                            <SinglePhoto picture={item} />
                        </li>

                    )
                })}  
                
            </ul>
            )}
        </div>
    );
}


  
  
