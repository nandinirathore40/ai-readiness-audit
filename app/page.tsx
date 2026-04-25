"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);
  const [issues, setIssues] = useState<string[]>([]);
  
  function generateScore(url: string): number {
  let base = 60;

  if (url.includes("blog")) base += 10;
  if (url.includes("shop")) base += 5;

  return base + Math.floor(Math.random() * 20);
}

  function getIssues(url: string): string[] {
  const issues: string[] = [];

  if (!url.includes("faq")) issues.push("No FAQ section");
  issues.push("Missing structured data (Schema)");
  issues.push("Weak heading hierarchy");
  issues.push("Low semantic clarity");

  return issues.slice(0, 4);
}

  function handleAnalyze() {
    if (!url) return;

    setScore(generateScore(url));
    setIssues(getIssues(url));
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ fontSize: "22px", marginBottom: "5px", color: "#111" }}>
        AI Readiness Audit
        </h1>
        <p style={{ fontSize: "14px", color: "#444", marginBottom: "15px" }}>
         Analyze how well your site is structured for AI systems
        </p>

        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleAnalyze} style={styles.button}>
          Analyze
        </button>

        {score !== null && (
          <div style={styles.result}>
            <h2 style={{ fontSize: "48px", marginBottom: "10px", color: "#111" }}>
         {score}/100
            </h2>
          <p style={{ fontSize: "14px", color: "#444" }}>
           AI Readiness Score
          </p>

            <ul style={{ paddingLeft: "20px" }}>
              {issues.map((issue, index) => (
               <li key={index} style={{ color: "#333", marginBottom: "5px" }}>
              {issue}
               </li>
              ))}
            </ul>
            <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>
            Note: This is a simplified mock audit for demonstration purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f4f4",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  input: {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
  color: "#111",
},
  button: {
  marginTop: "12px",
  padding: "12px",
  width: "100%",
  border: "none",
  background: "black",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
 },
  result: {
    marginTop: "20px",
    textAlign: "left",
  },
};