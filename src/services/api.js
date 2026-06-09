export async function fetchPosts() {
  const response = await fetch("https://api.oluwasetemi.dev/posts");
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`https://api.oluwasetemi.dev/posts/${id}`);

  return response.json();
}
