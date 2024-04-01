import React from 'react';

const ExcelDownloadLink: React.FC = () => {
  return (
    <div>
      <p>Click the button below to download the Excel file:</p>
      <a href="backend/src/Excel/savedTable.xlsx" download>
        Download Excel File
      </a>
    </div>
  );
};

export default ExcelDownloadLink;
