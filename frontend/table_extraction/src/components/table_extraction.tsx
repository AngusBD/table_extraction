import React, { useState, ChangeEvent } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const ImageUploader: React.FC = () => {
  // State to hold the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Event handler for when a file is selected
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Get the selected file from the input element
    const file = event.target.files?.[0];
    setSelectedFile(file || null); // Update the selectedFile state
  };

  // Event handler for when the "Upload" button is clicked
  const handleUpload = async () => {
    // Check if a file is selected
    if (!selectedFile) {
      alert('Please select an image file');
      return;
    }

    // Create a FormData object and append the selected file
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Make an HTTP POST request to the backend with the selected file
      await axios.post('http://localhost:5000/process-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type header
        }
      });
      alert('Image uploaded and processed successfully');
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error uploading image:', error);
      alert('An error occurred while uploading the image');
    }
  };

  return (
    <div>
      {/* Input element for selecting a file */}
      <input type="file" onChange={handleFileChange} />
      {/* Button to trigger the upload */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
