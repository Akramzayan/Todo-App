import axios from 'axios';
const getTodo = async () => {
    const response = await axios.get('http://localhost:3000/todos{id}')
    return response.data   
}
const createTodo = async () => {
    const response = await axios.post('http://localhost:3000/todos')
    return response.data
}
const deleteTodo = async() => {
    const response = await axios.delete('http://localhost:3000/todos/{id}')
    return response.data
}
const updateTodo = async() => {
    const response = await axios.put('http://localhost:3000/todos/{id}')
    return response.data
}

const TodoService = {
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
}
export default TodoService;