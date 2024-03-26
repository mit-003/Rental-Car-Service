import { Outlet } from "react-router-dom";

export default function AddCars() {
  return (
    <div>
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">ID</span>
      <input type="text" className="form-control" placeholder="Enter ID" aria-label="Enter ID" aria-describedby="basic-addon1" />
    </div>

    <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon2">Car Model</span>
      <input type="text" className="form-control" placeholder="Car Model" aria-label="Enter Car Model" aria-describedby="basic-addon2" />
      
    </div>

    

    <div className="input-group mb-3">
      <span className="input-group-text">Price</span>
      <input type="text" className="form-control" aria-label=" Enter Amount " />
      
    </div>

    <div className="input-group mb-3">
    <span className="input-group-text">Type</span>
      <input type="text" className="form-control" placeholder="Enter type (Manual or Automatic)" aria-label="Username" />
      
      
    </div>

    <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon2">Fuel</span>
      <input type="text" className="form-control" placeholder="Petrol or Diesel" aria-label="Enter Car Model" aria-describedby="basic-addon2" />
      
    </div>

    <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon2">Seats</span>
      <input type="text" className="form-control" placeholder="Number of Seats" aria-label="Number of Seats" aria-describedby="basic-addon2" />
      
    </div>
    <Outlet />
    </div>
  );
}
