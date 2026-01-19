import base64
import re
import numpy as np
from PIL import Image
from io import BytesIO

def base64_to_pil(img_base64):
    image_data = re.sub('^data:image/.+;base64,', '', img_base64)
    return Image.open(BytesIO(base64.b64decode(image_data)))

def prepare_image(image, target_size=(224, 224)):
    image = image.resize(target_size)
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image
