import React, { useState } from "react";
import TextInputForm from "./components/TextInputForm.js";
import FilteredResponse from "./components/FilteredResponse.js";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
  const [responseData, setResponseData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const filterOptions = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highest_lowercase_alphabet", label: "Highest lowercase alphabet" }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Bajaj Finserv Health Dev Challenge</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <TextInputForm setResponseData={setResponseData} on />
        </div>
      </div>
      
      {responseData && (
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8">
            <Select
              isMulti
              options={filterOptions}
              onChange={setSelectedFilters}
              placeholder="Multi Filter"
            />
          </div>
        </div>
      )}
      
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-8">
          <FilteredResponse responseData={responseData} selectedFilters={selectedFilters} />
        </div>
      </div>
    </div>
  );
}

export default App;
