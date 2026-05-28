const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const templatePath = path.resolve(__dirname, "cv-template.html");
  const outputPath = path.resolve(__dirname, "cv.pdf");

  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  console.log("Loading template...");
  await page.goto(`file://${templatePath}`, {
    waitUntil: "networkidle0",
  });

  console.log("Generating PDF...");
  await page.pdf({
    path: outputPath,
    format: "A4",
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`PDF generated: ${outputPath}`);
})();
