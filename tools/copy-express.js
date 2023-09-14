const fs = require('fs-extra');

const copyFiles = async () => {
  try {
    await fs.copy('./node_modules/@pdftron/pdfjs-express/public', 'src/MyWeb/wwwroot/lib');
    await fs.copy('./node_modules/@pdftron/pdfjs-express/webviewer.min.js', 'src/MyWeb/wwwroot/lib/webviewer.min.js');

    console.log('WebViewer files copied over successfully');
  } catch (err) {
    console.error(err);
  }
};

copyFiles();
