from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np
from util import base64_to_pil, prepare_image

app = Flask(__name__)

model = tf.keras.models.load_model("model/cnn_anggrek.h5")

CLASS_NAMES = [
    "Cattleya",
    "Dendrobium",
    "Oncidium",
    "Phalaenopsis",
    "Vanda"
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    img_base64 = data["image"]

    image = base64_to_pil(img_base64)
    img_ready = prepare_image(image)

    prediction = model.predict(img_ready)[0]
    class_index = np.argmax(prediction)

    return jsonify({
        "class": CLASS_NAMES[class_index],
        "confidence": float(prediction[class_index])
    })

if __name__ == "__main__":
    app.run(debug=True)
