import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {


    const [data,setData] = useState([]);

    function getData() {
        axios
        .get("https://63490da40b382d796c7c7605.mockapi.io/first-crud")
        .then((res) =>{
        console.log(res.data);
        setData(res.data);
        });
    }
    function handleDelete(id) {
        axios
        .delete(`https://63490da40b382d796c7c7605.mockapi.io/first-crud/${id}`)
        .then(() => {
         getData();
        });
    }

    const setToLocalStorage =(id,name,email) => {

      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email)

    }

    useEffect(() =>{
        getData();
    },[]);
    
  return (
    <>
    <div className="d-flex justify-content-between m-2">
      <h2>Read Opreation</h2>      
      <Link to="/">
           <button className=" btn btn-secondary">Create</button>
      </Link>
      </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col" colspan=
        '3'>Email</th>

        {/* <th scope="col">Action</th> */}
      </tr>
    </thead>
    {data.map((eachData) =>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{eachData.id}</td>       
                        <td>{eachData.name}</td>
                        <td>{eachData.email}</td>
                        <td>
                          <Link to="/update">
                          <button className="btn-success" onClick={()=>setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                            )
                            }
                            >Edit</button>
                          </Link>
                          
                        </td>
                        <td>
                            <button className="btn-danger" onClick={()=> handleDelete(eachData.id)}>Delete</button>
                        </td>
                    </tr>
                    
                  </tbody>
                
            
            </>
            );
        })
    
    }
  </table>
  </>
  );
};

export default Read