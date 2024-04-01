import React from 'react';

const ExcelDownloadLinkWithBlob: React.FC = () => {
  const downloadExcelFile = async () => {
    try {
      // Make a request to the /download endpoint
      const response = await fetch('http://localhost:5000/download');
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to download Excel file');
      }
      
      // Get the Excel file data as a blob
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));
      
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'savedTable.xlsx');
      
      // Append the link to the document body and trigger a click event
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error('Error downloading Excel file:', error);
    }
  };

  return (
    <div>
      <p>Click the button below to download the Excel file:</p>
      <button onClick={downloadExcelFile}>Download Excel File</button>
    </div>
  );
};

export default ExcelDownloadLinkWithBlob;
