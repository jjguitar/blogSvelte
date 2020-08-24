const fetch = require('node-fetch');
const fs = require('fs');
let postObj = require('../routes/blog/_posts.json');
require('dotenv').config();

const API = process.env.GHOST_API;

const writeFile = (obj) => {
  const parseData = JSON.stringify(obj);
  fs.writeFileSync('./src/routes/blog/_posts.json', parseData);
  console.log('Datos guardados');
}

const fetchData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  const posts = await data.posts.map(post => {
    return{
      "title": post.title,
      "html": post.html,
      "slug": post.slug,
      "createdAt": post.created_at,
      "id": post.id,
      "desc": post.excerpt,
      "tag": post.meta_title,
      "image": post.feature_image
    }
  });

  if (postObj.length >= 15) {
    if (posts[0].title === postObj[0].title) {
      postObj.shift();
      postObj.unshift(posts[0]);
      writeFile(postObj);
    } else {
      postObj.unshift(posts[0]);
      writeFile(postObj);
    }
  } else {
    writeFile(posts);
  }
}

fetchData();
