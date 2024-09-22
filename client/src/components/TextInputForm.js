
import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

function TextInputForm({ setResponseData }) {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      // Parse and validate JSON input
      const parsedJson = JSON.parse(jsonInput);

      if (!parsedJson.data || !Array.isArray(parsedJson.data)) {
        setError("Invalid data format in JSON.");
        return;
      }

      // Call backend API
      const response = await axios.post("https://bfhl-challenge-lc70.onrender.com/bfhl", parsedJson);

      setResponseData(response.data);
      setError(""); // Clear error if successful
    } catch (err) {
      setError("Invalid JSON input or error in API call.");
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label className="mb-2">API Input</label>
        <textarea
          className="form-control"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={3}
          placeholder={`{"data":["A","1","B","z"]}`}
        />
      </div>
      
      {error && <p className="text-danger">{error}</p>}

      <button 
        className="btn btn-primary mt-2" 
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default TextInputForm;
