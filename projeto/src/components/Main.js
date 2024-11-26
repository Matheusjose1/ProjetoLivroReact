import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () =>{
    const apiKey = 'AIzaSyB917tSvJcHGsNmse119zFqBZe85j-jUz0';
    const [bookData, setData]= useState([])
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
            {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB917tSvJcHGsNmse119zFqBZe85j-jUz0'+'&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
    }
    
    return(
        <>
        <div className="header">
            <div className="row2">
                <div className="search">
                    <input type="text" placeholder="Procure um livro" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}></input>
                </div>
                
            </div>
        </div>
        <div className="container">
           { 
            <Card book={bookData}/>
           }
        </div>
        </>
    )
}

export default Main;