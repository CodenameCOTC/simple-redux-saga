import axios from "axios";

export async function fetchPostsApi(currentPage) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${currentPage}`
    );
    const { data } = await res;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function addPostApi(postData) {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    const { data } = res;
    return data;
  } catch (err) {
    throw err;
  }
}
