# BFHL_challenge

#### A web-based application that allows users to input JSON data, processes the data via a backend, and presents the filtered results based on user-selected criteria. 

Heres an overview:

#### Frontend Overview:
**1. User Interface:** The UI allows users to submit JSON data through a simple form. The input is validated to ensure it is in the correct JSON format.

**2. Multi-Select Filter:** After the input is processed, users can apply filters using a multi-select dropdown to view specific types of data, such as numbers, alphabets, or the highest lowercase alphabet in the data.

**3.  Display of Filtered Results:** The frontend then shows the filtered output in an organized, easy-to-read format based on the filters chosen by the user.

#### Backend Overview:

**1. Data Processing:** The backend processes the submitted JSON data. It separates numbers and alphabets from the input, and identifies the highest lowercase alphabet (if present).

**2. Validation of Base64 Files:** If a Base64-encoded file is provided, the backend validates the file, determines its MIME type, and calculates its size.

**3. API Responses:** The backend responds with processed data, which includes numbers, alphabets, and validation results for any file provided.

#### Screenshots:

![image](https://github.com/user-attachments/assets/0cd4f38d-225e-4803-84d7-f4e206c00696)

**Hit Submit!!**

![image](https://github.com/user-attachments/assets/9036f9f9-03aa-4aca-9685-0b35ed92714e)

**Or Change Parameters**

![image](https://github.com/user-attachments/assets/04ee263b-062c-4dbc-be86-32169f013871)


#### Key Features:

**1. Input Field:** Users can enter a JSON payload that includes an array of mixed items (numbers and alphabets).

**2. Validation:** JSON format validation ensures that only valid data is submitted.

**3. Filter Options** : Users can apply filters to view only specific data types (e.g., only numbers, only alphabets, or the highest lowercase letter).

**4. Processed Results:**  The frontend displays filtered results, such as all numbers in the input, or a combination of alphabets and numbers.

**5. Base64 File Handling:** If a file is included in the submission (as Base64), the backend checks its validity and provides file details like MIME type and size.



#### How it Works:

**1. Data Submission:** The user submits JSON data like {"data":["A","1","B","2"]}. The frontend then sends this data to the backend API.

**2. Backend Processing:** The backend separates numbers and alphabets, and returns the filtered results (e.g., Numbers: 1,2 and Alphabets: A,B).

**3. Frontend Display:** The frontend uses Bootstrap for responsive and clean design, showing the filtered results based on the user’s selection from the dropdown menu (e.g., displaying only numbers or alphabets as selected).


#### Technologies Used:

**1. Frontend:** React.js, Bootstrap for the UI, Axios for API calls, and Select for dropdown filters.

**2. Backend:** Node.js with Express handles the API logic, file validation, and data separation.


#### Purpose:

The application serves as a simple yet effective way to separate and filter data based on user input, providing both validation and file handling features. It's ideal for scenarios where data needs to be categorized and filtered quickly.

This project combines frontend interactivity with backend data processing, creating a seamless user experience for sorting and filtering input.
