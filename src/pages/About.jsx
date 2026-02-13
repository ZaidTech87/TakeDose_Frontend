import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.description}>
          Welcome to our website! We are passionate about building modern,
          fast, and user-friendly web applications using React and Vite.
        </p>

        <div style={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create high-quality digital experiences that are
            simple, beautiful, and efficient.
          </p>
        </div>

        <div style={styles.section}>
          <h2>Technologies We Use</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS3</li>
          </ul>
        </div>

        <button style={styles.button}>Contact Us</button>
      </div>
    </div>
  );
}