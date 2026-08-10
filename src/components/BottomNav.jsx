function BottomNav() {
  return (
    <nav className="bottom-nav">

      <button className="nav-item active">
        <span>⌂</span>
        <small>Home</small>
      </button>

      <button className="nav-item">
        <span>✦</span>
        <small>Insights</small>
      </button>

      <button className="pay-button">
        <span>₹</span>
      </button>

      <button className="nav-item">
        <span>↕</span>
        <small>Activity</small>
      </button>

      <button className="nav-item">
        <span>◉</span>
        <small>Profile</small>
      </button>

    </nav>
  );
}

export default BottomNav;