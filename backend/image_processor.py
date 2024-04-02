from img2table.document import Image
from img2table.ocr import PaddleOCR
# from datetime import datetime
import cv2
import os

def process_image_and_save(image_file, dest_excel_path):
    paddle_ocr = PaddleOCR(lang="en", kw={"use_dilation": True})

    # Ensure the InputImgs folder exists
    input_imgs_folder = 'backend/src/InputImgs'
    processing_imgs_folder = 'backend/src/Processing'
    os.makedirs(input_imgs_folder, exist_ok=True)

    # Save the uploaded image to the InputImgs folder
    uploaded_image_path = os.path.join(input_imgs_folder, 'uploaded_image.jpg')
    with open(uploaded_image_path, 'wb') as f:
        f.write(image_file.read())

    # Read the image using OpenCV
    image = cv2.imread(uploaded_image_path)

    # Process the image
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

    # Save the processed image
    processed_image_path = os.path.join(processing_imgs_folder, 'processed_image.jpg')
    cv2.imwrite(processed_image_path, thresh)

    # Convert the processed image to Excel
    img = Image(src=processed_image_path)
    img.to_xlsx(dest=dest_excel_path, ocr=paddle_ocr, implicit_rows=False,
                borderless_tables=False, min_confidence=50)
