import { useState, useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//***** INITIAL ARG */
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
//****** END INITIAL ARG */


const initialState = [];


export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  //******* FUNCION AGREGA TAREA */
  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch(action);
  };
  //******* FIN FUNCION AGREGA TAREA */


  //******* FUNCION REMUEVE TAREA */
  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    };

    dispatch(action);
  };
  //******* FIN FUNCION REMUEVE TAREA */


  //******* MANEJADOR DE TACHADO DE TAREA */
  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id
    };

    dispatch(action);

  };
  //******* FIN MANEJADOR DE TACHADO DE TAREA */

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }

}