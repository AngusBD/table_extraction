# from PIL import Image as PILImage
from openpyxl import load_workbook
from img2table.document import Image
from matplotlib import pyplot as plt
from img2table.ocr import PaddleOCR
import cv2

paddle_ocr = PaddleOCR(lang="en", kw={"use_dilation": True})

image = cv2.imread("src/testImg.jpg")
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

cv2.imwrite("src/Processing/thresh.jpg", thresh)
img = Image(src="src/Processing/thresh.jpg")
img.to_xlsx(dest="src/Excel/savedTable.xlsx",ocr=paddle_ocr,implicit_rows=False,
            borderless_tables=False,
            min_confidence=50)