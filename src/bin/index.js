const fetch = require('node-fetch');
const fs = require('fs');
let postObj = require('../routes/blog/_posts.json');
require('dotenv').config();

const API = process.env.GHOST_API;
const blogUrl = process.env.BLOG_URL;
const blogTitle = process.env.BLOG_TITLE;
const blogCover = process.env.BLOG_COVER;
const blogDescription = process.env.BLOG_DESCRIPTION;
const blogFavicon = process.env.BLOG_FAVICON;

const getDate = (date) => {
  if (date) {
    return new Date(date).toUTCString();
  } else {
    return new Date().toUTCString();
  }
}

const writeFile = async (obj) => {
  const parseData = JSON.stringify(obj);
  const rss = await createRss(obj);
  const siteMap = await createSitemap(obj);
  fs.writeFileSync('./src/routes/blog/_posts.json', parseData);
  console.log('Datos guardados');
  fs.writeFileSync('./static/rss.xml', rss);
  console.log('Update rss.xml');
  fs.writeFileSync('./static/sitemap.xml', siteMap);
  console.log('Update siteMap.xml');
}

const createRss = async (data) => {

  const parseItems = await data.map(item => {
    const pubDate = getDate(item.createdAt);
    return `
      <item>
        <title>
          ![CDATA[${item.title}]]
        </title>
        <link>
          ${blogUrl}/blog/${item.slug}/
        </link>
        <description>
          ![CDATA[${item.desc}]]
        </description>
        <category>
          ![CDATA[${item.tag}]]
        </category>
        <dc:creator>
          ![CDATA[${blogTitle}]]
        </dc:creator>
        <pubDate>
          ${pubDate}
        </pubDate>
        <media:content url="${blogCover}" medium="image" />
        <content:encoded>
          ![CDATA[${item.html}]]
        </content:encoded>
      </item>
    `
  }).join('');

  const template = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">

    <channel>
      <title>
        ![CDATA[${blogTitle}]]
      </title>
      <description>
        ![CDATA[${blogDescription}]]
      </description>
      <image>
        <url>${blogFavicon}</url>
        <title>
          ![CDATA[${blogTitle}]]
        </title>
        <link>
          ${blogUrl}
        </link>
      </image>
      <generator>
        SveltePractico
      </generator>
      <lastBuildData>
        ${getDate()}
      </lastBuildData>
      <atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml" />
      <ttl>60</ttl>
      ${parseItems}
    </channel>

    </rss>
  `
  return template;
};

const createSitemap = async (data) => {
  const parseItems = await data.map(item => {
    return `
    <url>
        <loc>${blogUrl}/blog/${item.slug}</loc>
        <lastmod>${getDate(item.createdAt)}</lastmod>
        <priority>0.80</priority>
    </url>
    `
  }).join('');
  const template = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${blogUrl}</loc>
        <lastmod>${getDate()}</lastmod>
        <priority>1.0</priority>
    </url>
    ${parseItems}
  </urlset>
  `
  return template;
};

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
      "tag": post.tags,
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
