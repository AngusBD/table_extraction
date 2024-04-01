from flask import Flask, request, send_file
from image_processor import process_image_and_save

app = Flask(__name__)

# Global variable for the path to the saved Excel file
EXCEL_FILE_PATH = 'src/Excel/savedTable.xlsx'

@app.route('/process-image', methods=['POST'])
def process_image():
    try:
        # Check if the request contains a file
        if 'file' not in request.files:
            return 'No file part in the request', 400
        
        file = request.files['file']

        # Check if the file is empty
        if file.filename == '':
            return 'No selected file', 400

        # Process the image and save it to Excel
        process_image_and_save(file, EXCEL_FILE_PATH)

        return 'Image processed and saved to Excel', 200
    except Exception as e:
        return f'Error processing image: {str(e)}', 500

@app.route('/download')
def download_file():
    try:
        # Return the saved Excel file as an attachment
        response = send_file(EXCEL_FILE_PATH, as_attachment=True)
        
        # Set Cache-Control header to prevent caching
        response.headers['Cache-Control'] = 'no-store'
        
        return response
    except Exception as e:
        return f'Error downloading file: {str(e)}', 500

if __name__ == '__main__':
    app.run(debug=True)
