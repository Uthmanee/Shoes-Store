import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.timbu.cloud",
});

const endpoint =
  "/products?organization_id=fb3c4f36dbe948369e8b8de5f39f46c7&reverse_sort=false&page=1&size=10&Appid=LOA0VBOHAAQGAPN&Apikey=c396f83b3c3f497b95d3b7d05922830920240708152307263343";

const getProducts = () => apiClient.get(endpoint);

export default { getProducts };
