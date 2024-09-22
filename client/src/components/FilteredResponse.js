// src/components/FilteredResponse.js
import React from "react";

function FilteredResponse({ responseData, selectedFilters }) {
  if (!responseData) return null;

  const filteredResponse = {};

  selectedFilters.forEach((filter) => {
    filteredResponse[filter.value] = responseData[filter.value];
  });

  return (
    <div>
      <h3>Filtered Response</h3>
      {Object.keys(filteredResponse).map((key) => (
        <div key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {filteredResponse[key].join(", ")}
        </div>
      ))}
    </div>
  );
}

export default FilteredResponse;
