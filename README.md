# MEIS Workshop Website

This is the project for the MEIS Workshop website (3rd MEIS Workshop @ CVPR 2026).

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## Flyer & PDF Generation

This website includes a dedicated flyer page and a script to convert it into a high-quality A4 PDF.

### 1. View Flyer
The flyer is accessible at the `/flyer` route:
[http://localhost:3000/flyer](http://localhost:3000/flyer)

### 2. Generate PDF
To generate a new `flyer.pdf`, follow these steps:

1. **Start the server on port 3001**:
   ```bash
   npm run dev -- -p 3001
   ```

2. **Run the generation script**:
   In another terminal window, run:
   ```bash
   node generate-pdf.js
   ```

The script uses **Puppeteer** to capture a high-resolution screenshot of the `/flyer` page and saves it as an A4-formatted `flyer.pdf` in the root directory.

---

## Acknowledgments
Based on [Lava workshop](https://lava-workshop.github.io/).