import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
    title: post.title,
    html: post.html,
    slug: post.slug,
    createdAt: post.createdAt,
    id: post.id,
    desc: post.desc,
    tag: post.tag,
    image: post.image,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}