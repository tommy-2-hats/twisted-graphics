import fs from 'fs';
import path from 'path';

const folderPath = '/Users/the-bar/Repo/twisted-graphics/assets/client-images';

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const oldPath = path.join(folderPath, file);
        const newPath = path.join(folderPath, file.toLowerCase());

        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.error(`Error renaming file ${file}:`, err);
            } else {
                console.log(`Renamed ${file} to ${file.toLowerCase()}`);
            }
        });
    });
});
// To run this script, you need to replace '/path/to/your/folder' with the actual path to the folder you want to process.
// No, you don't need a slash at the end of the folder name. The `path.join` method will handle the path correctly without it.
// Then, you can run the script using Node.js from the command line:
// node /Users/the-bar/Repo/twisted-graphics/filenameLowercase.js