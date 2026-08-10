function FlexPocket({ amount }) {
  return (
    <section className="flex-pocket card">

      <div className="flex-icon">
        ✦
      </div>

      <div className="flex-content">
        <p className="eyebrow">FLEX POCKET</p>

        <h2>₹{amount}</h2>

        <p>
          For whatever the day brings.
        </p>
      </div>

    </section>
  );
}

export default FlexPocket;