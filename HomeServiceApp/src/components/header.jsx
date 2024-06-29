const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img
            src="../../public/images/Logoipsum-logo.svg"
            alt="Logo"
            style={{ height: "75px" }}
          />
        </div>
        <div>
          <button>Home</button>
          <button>Services</button>
          <button>About Us</button>
        </div>
      </div>
      <div>
        <button>Login / Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
