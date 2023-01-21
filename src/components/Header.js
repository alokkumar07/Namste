const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU"
      />
    </a>
  );
  
 const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li> 
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
 export default Header;