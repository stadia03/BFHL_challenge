import mime from 'mime-types';

// Validate if a string is a valid Base64 string
export const isValidBase64 = (base64String) => {
  return base64String && /^[A-Za-z0-9+/=]+$/.test(base64String);
};

// Get file details (validity, MIME type, size)
export const getFileDetails = (file_b64) => {
  if (!file_b64) {
    return {
      file_valid: false,
      file_mime_type: null,
      file_size_kb: null
    };
  }

  const isValid = isValidBase64(file_b64);
  let fileMimeType = null;
  let fileSizeKb = null;

  if (isValid) {
    const buffer = Buffer.from(file_b64, 'base64');
    fileSizeKb = buffer.length / 1024; // File size in KB
    fileMimeType = mime.lookup(buffer);
  }

  return {
    file_valid: isValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKb
  };
};
