export async function fetchPosts(page = 1, limit = 10) {
  const response = await fetch(
    `https://api.oluwasetemi.dev/posts?page=${page}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`https://api.oluwasetemi.dev/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
