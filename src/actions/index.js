import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "./actionTypes";

let newTaskID = 0;
//Action: 'add new Task'
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskID: newTaskID++,
        taskName: inputTaskName
    }
}
//Action: 'toggle 1 task to completed / incompleted'
export const toggleTask = (taskID) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskID: taskID
    }
}