import { ADD_ITEM, REMOVE_ITEM, DELETE_ITEM } from "./types";

export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
};