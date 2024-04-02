import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import ImageUploader from './components/table_extraction'
import ExcelDownloadLink from './components/DownloadExcel'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ImageUploader/>
    <ExcelDownloadLink />
  </React.StrictMode>,
)
