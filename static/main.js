document.addEventListener("DOMContentLoaded", () => {

  const fileInput = document.getElementById("file-upload");
  const imagePreview = document.getElementById("image-preview");
  const uploadText = document.getElementById("upload-text");

  const resultBox = document.getElementById("result-box");
  const predResult = document.getElementById("pred-result");
  const predProbability = document.getElementById("pred-probability");

  let selectedImage = null;

  /* IMAGE PREVIEW */
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      selectedImage = reader.result;
      imagePreview.src = selectedImage;
      imagePreview.classList.remove("hidden");
      uploadText.classList.add("hidden");
      resultBox.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  });

  /* SUBMIT */
  window.submitImage = async function () {
    if (!selectedImage) {
      alert("Upload gambar terlebih dahulu");
      return;
    }

    predResult.textContent = "Menganalisis...";
    predProbability.textContent = "-";
    resultBox.classList.remove("hidden");

    try {
      const res = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: selectedImage })
      });

      const data = await res.json();

      predResult.textContent = data.class;
      predProbability.textContent = (data.confidence * 100).toFixed(2);

    } catch (err) {
      alert("Gagal melakukan prediksi");
      resultBox.classList.add("hidden");
    }
  };

  /* CLEAR */
  window.clearImage = function () {
    fileInput.value = "";
    selectedImage = null;

    imagePreview.src = "";
    imagePreview.classList.add("hidden");
    uploadText.classList.remove("hidden");

    resultBox.classList.add("hidden");
  };

});
