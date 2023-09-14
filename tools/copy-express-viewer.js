const fs = require('fs-extra');

const copyFiles = async () => {
  try {
    await fs.copy('./node_modules/@pdftron/pdfjs-express-viewer/public', 'src/MyViewer/wwwroot/lib');
    await fs.copy('./node_modules/@pdftron/pdfjs-express-viewer/webviewer.min.js', 'src/MyViewer/wwwroot/lib/webviewer.min.js');

    console.log('WebViewer files copied over successfully');
  } catch (err) {
    console.error(err);
  }
};

copyFiles();
