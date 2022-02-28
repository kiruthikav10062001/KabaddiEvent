import React,{useState} from "react";
import data from "./data";

function Search(){
    const[filter,setFilter]=useState('');
    
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.cardData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    function handleSearch()
    {
        console.log('search');
    }
    return(
        <body>
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <input className="searchbar" 
                                type="text" 
                                placeholder="Type here to search"
                                value={filter}
                                onChange={searchText.bind(this)}
                        />
                        <button className="btn" type="search" onClick={handleSearch}>Search</button>
                    </div>
                </div>

                {dataSearch.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.image} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.stadiumname}</h5>
                                    <p className="card-text">Place: {item.place}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </section>
        </body>
    )
}
export default Search