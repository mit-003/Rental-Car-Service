import { Link, Outlet } from "react-router-dom";

export default function Layout(){


        

return (
<div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <Link className="navbar-brand" to="#">Speed Car</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      
      
      
      
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/Link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          CARS
        </Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/Maruthi">Maruthi</Link></li>
          <li className="dropdown-divider"></li>
          <li><Link className="dropdown-item" to="/Honda">Honda</Link></li>
          <li className="dropdown-divider"></li>
          <li><Link className="dropdown-item" to="/Hyundai">Hyundai</Link></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Faq">FAQ</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Register">REGISTER</Link>
      </li>
      
    </ul>
    <form classNameName="d-flex" role="search">
      <input 
          classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
<Outlet />
    </div>);


}