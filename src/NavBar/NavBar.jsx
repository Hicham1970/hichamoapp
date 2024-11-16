export default function Navbar() {
  return (
    <div className="navbar bs-dark bg-dark d-sm-d-inline-flex justify-content-around">
      <ul className="bs-dark text-white flex-sm-row  d-sm-inline-flex justify-content-around">
        <li className="nav-item mx-sm-3 my-2 my-sm-0">
          <a href="#home">
            Home
          </a>
        </li>
        <li className="nav-item mx-sm-3 my-2 my-sm-0">
          <a href="#news">News</a>
        </li>
        <li className="nav-item mx-sm-3 my-2 my-sm-0">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item mx-sm-3 my-2 my-sm-0">
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}
