import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import SecretCard from "../components/secretcard.js";
import { secrets } from "../api/secrets-api.js";

const fetchsecrets = async () => {
  try {
    const secret_details = await secrets();
    console.log(secret_details.data.secrets);
    return secret_details.data.secrets;
  } catch (error) {
    console.error("Error fetching secrets:", error);
    return [];
  }
};

function Secrets() {
  const [allsecrets, setallsecrets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchsecrets();
      setallsecrets(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleClick = () => {
    window.location.href = "/addsecret";
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Navbar />
        <p>Loading secrets...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          padding: "1rem",
          marginTop: "6rem",
        }}
      >
        {allsecrets.length > 0 ? (
          allsecrets.map((secret) => (
            <SecretCard
              key={secret._id} // Add a unique key for each item
              user={secret.username}
              heading={secret.heading}
              body={secret.body}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No secrets available</p>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <button
          className="btn btn-primary"
          style={{ height: "50px" }}
          onClick={handleClick}
        >
          Add Your Secret
        </button>
      </div>
    </div>
  );
}

export default Secrets;
