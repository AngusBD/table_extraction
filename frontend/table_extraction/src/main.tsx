import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import ImageUploader from './components/table_extraction.tsx'
// import ExcelDownloadLink from './components/DownloadLink.tsx'
import ExcelDownloadLinkWithBlob from './components/DownloadLinkWithBlob.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ImageUploader />
    {/* <ExcelDownloadLink/> */}
    <ExcelDownloadLinkWithBlob/>
  </React.StrictMode>,
)
