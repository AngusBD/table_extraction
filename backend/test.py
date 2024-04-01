from image_processor import process_image_and_save

with open("backend/src/testImg.jpg", "rb") as image_file:
    process_image_and_save(image_file, 'backend/src/Excel/savedTable.xlsx')
