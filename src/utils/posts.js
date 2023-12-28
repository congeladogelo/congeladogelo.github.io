export default async function getPostList(categories = null, ascending = true) {
  const response = await fetch('/post-list.json');
  let posts = await response.json();
  if (categories !== null) {
    posts = posts.filter((post) => categories.includes(post.category));
  }
  if (!ascending) {
    posts = posts.reverse();
  }
  return posts;
}
