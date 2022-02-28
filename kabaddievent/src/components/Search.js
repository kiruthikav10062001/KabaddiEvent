import React,{useState} from "react";
import data from "./data";
import "./navbar.css";

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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
        <section className="py-4 container">
        
        <div className="row justify-content-center">
                    
                        <div className="search">
                        <input className="searchbar"
                                type="text" 
                                placeholder="Search"
                                value={filter}
                                onChange={searchText.bind(this)}/>
                        <a href="#" className="search-icon"> <i class="bi-search" onClick={handleSearch}></i>  </a>
                        </div>
                    
                        
    
        </div>
        <div className="row justify-content-center">
            {dataSearch.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-4 mx-0 mb-4">{/*col-11 col-md-4 col-lg-4 mx-0 mb-4">*/}
                            <div className="card p-4 overflow-hidden h-100 shadow">
                                <img src={item.image} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.stadiumname}</h5>
                                    <p className="card-text">Place: {item.place}&emsp;&emsp;&emsp;
                                    <span class="fa fa-star checked fa-lg" aria-hidden="true"></span>
                                    <span class="fa fa-star checked fa-lg" aria-hidden="true"></span>
                                    <span class="fa fa-star checked fa-lg" aria-hidden="true"></span>
                                    <span class="fa fa-star-half-o checked fa-lg" aria-hidden="true"></span>
                                    <span class="fa fa-star-o unchecked fa-lg" aria-hidden="true"></span>
                                    </p>
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