import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import { addsecrets } from '../api/secrets-api';

export default function AddSecrets() {
  const [title, setTitle] = useState('');
  const [secret, setSecret] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {heading: title, body: secret};
    try{
        const res = await addsecrets(data);
        setMessage(res.data.Message);
    }
    catch(err)
    {
        console.log(err);
        setMessage(err.response.data.Message);
    }
    await delay(1500);
    window.location.href = "/secrets";
    console.log('Title:', title);
    console.log('Secret:', secret);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div style={{ 
      backgroundColor: '#f4f4f9', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
        <h1>Add a Secret</h1>
        <div>
          <p style={{textAlign:'center'}}>{message}</p>
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="titleInput">Title</label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              placeholder="Enter a title for your secret"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="secretTextarea">Enter Your Secret</label>
            <textarea
              className="form-control"
              id="secretTextarea"
              placeholder="Write your secret here"
              rows="4"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            ></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6200ea',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
