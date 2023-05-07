import {
    GET_USERS,
    CREATE_USER,
    DELETE_USER,
} from "./user/actions.js";

import {
    GET_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    UPDATE_TODO_CONTENT,
    CHANGE_FILTER,
    TOGGLE_TODO_COMPLETE,
} from "./todo/actions.js";
import { FILTER_TYPE } from "../utils/constants.js";

let initialState = {
    users: [],
    todos: [],
    filter: FILTER_TYPE.ALL,
}
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.payload,
            }
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.name !== action.payload.name),
            }
        case GET_TODOS:
            return {
                ...state,
                ...action.payload,
            }
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload.todo],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
            }
        case UPDATE_TODO_CONTENT:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.content = action.payload.content;
                    }
                    return todo;
                })
            }
        case TOGGLE_TODO_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        case CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload.filter,
            }
        default:
            return state;
    }
}

export default reducer;