const getTags = (tags) => {
  let nameTags = '';
  const posts = tags.map(tag => {
    nameTags = `${nameTags} / ${tag.name}`;
  })
  nameTags = nameTags.substr(2, nameTags.length);
  console.log(nameTags);
  return nameTags;
}


export default getTags;