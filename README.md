# IFANID - Next.js Project

## Deskripsi

Proyek ini adalah aplikasi web berbasis Next.js dengan App Router, menggunakan struktur direktori dalam `src/` untuk manajemen kode yang lebih rapi. Proyek ini dikembangkan di Termux dan didesain untuk menyediakan halaman multi-rute dengan komponen yang terpisah.

## Fitur

- Menggunakan Next.js dengan App Router

- Struktur kode yang bersih dalam `src/`

- Menggunakan ESLint untuk memastikan kualitas kode

- Komponen modular dalam folder `components`

## Struktur Direktori

```
ifanid/
│── .next/               # Build output Next.js
│── node_modules/        # Dependency packages
│── public/              # Static assets (favicon, images, etc.)
│── src/                 # Source code
│   ├── app/             # App Router structure
│   │   ├── routes/      # Routing pages
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── page.js
│   │   ├── layout.js
│   │   ├── page.js
│   ├── components/      # Reusable components
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── index.js
│   │   │   │   ├── styles.module.css
│   ├── styles/          # Global and module styles
│── .gitignore           # Git ignore rules
│── eslint.config.mjs    # ESLint configuration
│── jsconfig.json        # JavaScript config (import aliases)
│── next.config.mjs      # Next.js configuration
│── package.json         # Dependencies and scripts
│── package-lock.json    # Dependency lock file
│── README.md            # Dokumentasi proyek ini
```

## Cara Menjalankan

Pastikan Anda berada di direktori proyek, lalu jalankan perintah berikut:

```bash
npm run dev  # Menjalankan aplikasi dalam mode pengembangan
```

Buka browser dan akses `http://localhost:3000` untuk melihat aplikasi berjalan.

## Teknologi yang Digunakan

- Next.js - Framework React untuk aplikasi web
- React.js - Library JavaScript untuk UI
- ESLint - Linter untuk kode JavaScript
- CSS Modules

## Kontributor

- Ifan - Pengembang utama

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan modifikasi dan gunakan sesuai kebutuhan.
