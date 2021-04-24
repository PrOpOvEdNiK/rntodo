export const TASK_ADD = 'TASK_ADD';
export const TASK_REMOVE = 'TASK_REMOVE';
export const TASK_COMPLETE = 'TASK_COMPLETE';
export const TASK_EDIT = 'TASK_EDIT';

export const addTask = (item) => ({
    type: TASK_ADD,
    payload: item
});

export const removeTask = (id) => ({
    type: TASK_REMOVE,
    payload: id
});

export const completeTask = (id) => ({
    type: TASK_COMPLETE,
    payload: id
});

export const editTask = (id, text) => ({
    type: TASK_COMPLETE,
    payload: {id, text}
});