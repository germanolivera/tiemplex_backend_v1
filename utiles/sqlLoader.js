// utils/sqlLoader.js
const fs = require('fs');
const path = require('path');

exports.load = (folder, file) => {
    const filePath = path.join(__dirname, '../sql', folder, file);
    return fs.readFileSync(filePath, 'utf-8');
};