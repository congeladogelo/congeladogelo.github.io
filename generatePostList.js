/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const publicFolderPath = path.join(__dirname, 'public');
const postsFolderPath = path.join(publicFolderPath, 'posts');

function getCategories(dir) {
  return fs.readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}

const readFileContent = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

function getPosts(category, dir) {
  const files = fs.readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isFile());
  return files.map((file) => ({
    postId: path.parse(file).name,
    category,
    'created-at': readFileContent(path.join(dir, file))['created-at'],
  }));
}

let postList = [];
const categories = getCategories(postsFolderPath);
categories.forEach((category) => {
  postList.push(...getPosts(category, path.join(postsFolderPath, category)));
});
postList = postList.sort((postA, postB) => {
  const dateA = new Date(postA['created-at']);
  const dateB = new Date(postB['created-at']);
  return dateA - dateB;
});
postList = postList.map((post) => ({ category: post.category, postId: post.postId }));
const postListJson = `${JSON.stringify(postList, null, 4)}\n`;

fs.writeFileSync(path.join(publicFolderPath, 'post-list.json'), postListJson);

console.log('post-list.json file generated successfully.');
