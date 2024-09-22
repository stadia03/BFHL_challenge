import { getFileDetails } from '../helpers/fileHelper.js';

export const postBfhl = (req, res) => {
  const { data, file_b64 } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid data input' });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = null;

  // Separate numbers and alphabets
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string') {
      alphabets.push(item);
      // Check for the highest lowercase alphabet
      if (item === item.toLowerCase()) {
        if (!highestLowercaseAlphabet || item > highestLowercaseAlphabet) {
          highestLowercaseAlphabet = item;
        }
      }
    }
  });

  // Handle file validation and file details
  const fileDetails = getFileDetails(file_b64);

  // Respond with the required fields
  res.json({
    is_success: true,
    user_id: "john_doe_17091999", // Hardcoded user ID
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
    file_valid: fileDetails.file_valid,
    file_mime_type: fileDetails.file_mime_type || null,
    file_size_kb: fileDetails.file_size_kb || null
  });
};

export const getBfhl = (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
};
