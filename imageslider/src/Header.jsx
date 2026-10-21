const Header = ({ current, total }) => {
  return (
    <header className="header">
      <h1>Fotógaléria</h1>
      <p>
        Kép {current} / {total}
      </p>
    </header>
  );
};

export default Header;
