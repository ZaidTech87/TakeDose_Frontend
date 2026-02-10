function Dashboard() {
  return (
    <div className="page">
      <h2>Welcome to TakeDose Dashboard</h2>

      <p style={{ marginTop: "10px" }}>
        Use this system to manage your vaccination appointments.
      </p>

      <div style={{ marginTop: "20px" }}>
        <ul>
          <li>📅 Book a vaccination appointment</li>
          <li>💉 Check your vaccination date</li>
          <li>📋 View all your appointments</li>
          <li>👤 Manage your profile</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
