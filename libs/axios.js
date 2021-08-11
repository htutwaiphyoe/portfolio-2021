import axios from "axios";

const urls = {
    development: "http://localhost:3000",
    production: "https://www.htutwaiphyoe.me",
};
export default axios.create({
    baseURL: urls[process.env.NODE_ENV],
});
