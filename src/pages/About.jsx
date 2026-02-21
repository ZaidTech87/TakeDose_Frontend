import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About TakeDose</h1>

        <p style={styles.description}>
          TakeDose is a vaccination management system designed to help users,
          doctors, and vaccination centers manage appointments and records
          efficiently.
        </p>

        <div style={styles.section}>
          <h2>🎯 Our Goal</h2>
          <p>
            Our goal is to simplify vaccination tracking and appointment
            scheduling through a clean and user-friendly platform.
          </p>
        </div>

        <div style={styles.section}>
          <h2>⚙️ Features</h2>
          <ul>
            <li>Add & Manage Users</li>
            <li>Add Doctors & Centers</li>
            <li>Book Appointments</li>
            <li>Track Vaccination Dates</li>
            <li>Update User Information</li>
          </ul>
        </div>
          <h2>Purpose</h2>
      <p>
        The purpose of this frontend is to:
      </p>
      <ul>
        <li>Send API requests</li>
        <li>Test CRUD operations</li>
        <li>Verify backend responses</li>
        <li>Check validation and error handling</li>
      </ul>

        <div style={styles.section}>
          <h2>💻 Technologies Used</h2>
          <ul>
            <li>React (Vite)</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS</li>
             <li>Java</li>
        <li>Spring Boot</li>
        <li>REST APIs</li>
          </ul>
        </div>

        <button  onClick={() => alert("If you want to Contact us please goto Contact Page")} style={styles.button}>Contact Support</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    maxWidth: "700px",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
    color: "#2a5298",
  },
  description: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
  },
  section: {
    marginBottom: "20px",
  },
  button: {
    display: "block",
    margin: "30px auto 0",
    padding: "10px 25px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2a5298",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default About;
// i have to chaeck this