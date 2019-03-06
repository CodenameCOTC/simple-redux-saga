import axios from "axios";

export async function fetchPostsApi() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    const { data } = await res;
    return data;
  } catch (err) {
    throw err;
  }
}
