import axios from "axios";

const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return response.data;
}

export default getTodos;