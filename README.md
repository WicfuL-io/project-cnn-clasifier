# Python Machine Learning App (Training & Flask App)

## 📌 Deskripsi

Proyek ini adalah aplikasi **Machine Learning berbasis Python** yang terdiri dari:

* **train.py** → untuk melatih (training) model
* **app.py** → untuk menjalankan aplikasi (Flask Web App)

Proyek ini menggunakan **Python 3.10.11** dan beberapa library populer seperti TensorFlow, NumPy, SciPy, OpenCV, dan Flask.

---

## 🧰 Requirements

Pastikan Anda sudah menginstal:

* **Python 3.10.11**
* **pip** (sudah termasuk saat instalasi Python)

Cek versi Python:

```bash
python --version
```

---

## ⚙️ Setup Environment

### 1️⃣ Buat Virtual Environment

```bash
py -m venv venv
```

### 2️⃣ Aktifkan Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

Jika berhasil, akan muncul `(venv)` pada terminal.

---

## 📦 Install Dependencies

Jalankan perintah berikut secara berurutan:

```bash
python -m pip install --upgrade pip
pip install flask pillow
pip install opencv-python==4.7.0.72
pip install tensorflow==2.10.1
pip install numpy==1.23.5
pip install scipy==1.9.3
```

> ⚠️ **Catatan:** Versi library dikunci untuk menjaga kompatibilitas dengan TensorFlow 2.10.11.

---

## 🧠 Training Model

Untuk melakukan training model, jalankan:
sebelum itu jangan lupa melakukan extract zip terlrbih dahulu (dataset.zip)

```bash
python train.py
```

Pastikan proses training selesai tanpa error sebelum melanjutkan ke tahap berikutnya.

---

## 🚀 Menjalankan Aplikasi

Setelah model berhasil dibuat, jalankan aplikasi Flask dengan perintah:

```bash
python app.py
```

Biasanya aplikasi dapat diakses melalui browser di:

```
http://127.0.0.1:5000
```

---

## 📁 Struktur File (Contoh)

```
project-folder/
│── venv/
│── train.py
│── app.py
│── model/
│   │── (hasil training data)
│── static/
│   │── main.js
│   │── main.css
│   │── (images logo dan hero)
│── templates/
│   │── base.html
│   │── index.html
│── README.md
```

---

## ❗ Troubleshooting

* Pastikan **virtual environment aktif** sebelum menjalankan program
* Gunakan **Python 3.10.11**, versi lain bisa menyebabkan error TensorFlow
* Jika terjadi error dependency, hapus venv dan ulangi proses instalasi

---

## 📄 Lisensi

Proyek ini bebas digunakan untuk keperluan belajar dan pengembangan.

---

✨ *Happy Coding!* 🚀
