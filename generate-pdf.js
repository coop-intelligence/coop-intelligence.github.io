const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Use a wide viewport so all grid columns render properly
    await page.setViewport({ width: 750, height: 700, deviceScaleFactor: 2 });

    console.log('Navigating to http://localhost:3001/flyer ...');
    await page.emulateMediaType('screen');
    await page.goto('http://localhost:3001/flyer', { waitUntil: 'networkidle0' });

    // Get actual content height
    const bodyHeight = await page.evaluate(() => {
        return document.querySelector('main').scrollHeight;
    });
    console.log(`Content height: ${bodyHeight}px`);

    console.log('Generating PDF...');

    // Take a screenshot of the full page content, then convert to PDF
    // This ensures the PDF matches exactly what the browser renders
    const screenshot = await page.screenshot({
        fullPage: true,
        type: 'png',
    });

    // Create a new page with the screenshot sized to A4
    const pdfPage = await browser.newPage();
    const base64 = screenshot.toString('base64');

    // A4 dimensions in pixels at 96dpi: 794 x 1123
    // We want to fit content into a single A4 page
    await pdfPage.setContent(`
        <html>
        <head>
            <style>
                * { margin: 0; padding: 0; }
                body { 
                    width: 210mm; 
                    height: 297mm; 
                    overflow: hidden;
                }
                img { 
                    width: 100%; 
                    height: auto;
                    display: block;
                }
            </style>
        </head>
        <body>
            <img src="data:image/png;base64,${base64}" />
        </body>
        </html>
    `, { waitUntil: 'networkidle0' });

    await pdfPage.pdf({
        path: 'flyer.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    });

    console.log('PDF generated successfully as flyer.pdf!');
    await browser.close();
})();
