import axios from 'axios';

export const getTodos = () => async (dispatch) => {
  try {
    // Fetching todos
    const res = await axios.get('/api/todos');
    dispatch({ type: 'GET_TODOS', payload: res.data });
  } catch (err) {
    console.log(err);
  }

  try {
    // Adding todos
    const res = await axios.post('/api/todos');
    dispatch({ type: 'ADD_TODOS', payload: res.data });
  } catch (err) {
    console.log(err);
  }
  try {
    // Deleting todos
    const res = await axios.delete('/api/todos');
    dispatch({ type: 'DELETE_TODOS', payload: res.data });
  }
  catch(err) {
    console.log(err);
  }
  try {
    // Updating todos
    const res = await axios.patch('/api/todos');
    dispatch({ type: 'UPDATE_TODOS', payload: res.data });
  }
  catch(err) {
    console.log(err);
  }
};