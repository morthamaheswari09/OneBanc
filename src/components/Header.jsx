function Header() {
  return (
    <header className="dashboard-header">
      <div>
        <p className="greeting">Good morning, Mahi 👋</p>

        <h1>Let's set your money rhythm.</h1>
      </div>

      <div className="weather-state">
        <span className="weather-icon">☀️</span>

        <div>
          <strong>Clear day ahead</strong>
          <p>Your plan is ready.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;