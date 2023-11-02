// api.ts
import axios from "axios";

export async function getData(): Promise<any> {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
}
