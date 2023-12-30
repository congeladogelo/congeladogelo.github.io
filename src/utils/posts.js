export default async function getPostList(categories = null, ascending = true) {
  const postIds = await (await fetch('/post-list.json')).json();
  const postPromises = postIds.map((postId) => fetch(`/posts/${postId}.post`));
  const postResponses = await Promise.all(postPromises);
  const postJsonPromises = postResponses.map((postResponse) => postResponse.json());
  let posts = await Promise.all(postJsonPromises);
  posts = posts.map((post, index) => ({ postId: postIds[index], ...post }));
  if (categories !== null) {
    posts = posts.filter((post) => categories.some(
      (category) => post.categories.includes(category),
    ));
  }
  posts = posts.sort((postA, postB) => {
    const dateA = new Date(postA['created-at']);
    const dateB = new Date(postB['created-at']);
    return (ascending) ? dateA - dateB : dateB - dateA;
  });
  return posts.map((post) => post.postId);
}
