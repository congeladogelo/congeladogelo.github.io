/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const publicFolderPath = path.join(__dirname, 'public');
const postsFolderPath = path.join(publicFolderPath, 'posts');

function getPosts(dir) {
  const files = fs.readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isFile());
  return files.map((file) => path.parse(file).name);
}

const postList = getPosts(postsFolderPath);

const postListJson = `${JSON.stringify(postList, null, 4)}\n`;

fs.writeFileSync(path.join(publicFolderPath, 'post-list.json'), postListJson);

console.log('post-list.json file generated successfully.');
