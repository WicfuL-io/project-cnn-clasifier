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
pip install scipy==1.9.3
pip install tensorflow==2.10.11
pip install numpy==1.23.5
pip install flask pillow opencv-python
```

> ⚠️ **Catatan:** Versi library dikunci untuk menjaga kompatibilitas dengan TensorFlow 2.10.11.

---

## 🧠 Training Model

Untuk melakukan training model, jalankan:

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
│── static/
│── templates/
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
