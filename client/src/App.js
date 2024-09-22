// src/App.js
import React, { useState } from "react";
import TextInputForm from "./components/TextInputForm.js";
import FilteredResponse from "./components/FilteredResponse.js";
import Select from 'react-select';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const filterOptions = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highest_lowercase_alphabet", label: "Highest lowercase alphabet" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bajaj Finserv Health Dev Challenge </h1> {/* Roll number as title */}
      {/* Component to handle JSON input and API call */}
      <TextInputForm setResponseData={setResponseData} on/>
      
      { (
        <div style={{ marginTop: "20px" }}>
          <Select
            isMulti
            options={filterOptions}
            onChange={setSelectedFilters}
            placeholder="Multi Filter"
          />
          {/* Component to handle filtered response display */}
          <FilteredResponse responseData={responseData} selectedFilters={selectedFilters} />
        </div>
      )}
    </div>
  );
}

export default App;
