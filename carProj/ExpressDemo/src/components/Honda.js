import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom"

export default function Honda() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchHondaData();
  }, []);

  const fetchHondaData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/brands/Honda");
      setArr(response.data[0].models);
    } catch (error) {
      console.error("Error fetching Honda data:", error);
    }
  };

  return (
    <div>
      {arr.map((el) => (
        <div className="card ms-7" style={{ width:"18rem",margin: "10px" }} key={el.brand}>
          <div className="row g-0">
            {/* <div className="col-md-4"> 
              <img src={el.image} className="card-img" alt="Honda" />
              </div> */}
            <div className="col-md-8">
              <div className="card-body">
                
                <h5 className="card-text">{el.model}</h5>
                <p className="card-text">{el.price}</p>
                <p className="card-text">{el.type}</p>
                <p className="card-text">{el.fuel}</p>
                <p className="card-text">{el.seats}</p>
                <Link to="/Update" className="btn btn-primary" >BOOK NOW</Link> 
                <button className="btn btn-primary"><Link to="/Remove" style={{textDecoration:"none",color:"white"}}>Remove</Link></button> 
              </div>
            </div>
          </div>
        </div>
      ))}
      <Outlet/>
    </div>
  );
  
}