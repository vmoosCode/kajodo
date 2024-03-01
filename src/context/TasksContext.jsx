import { createContext, useContext } from "react";
import ErrorPage from "../pages/ErrorPage";


export const TasksContext = createContext([]);

export function useTasksContext() {
    const tasks = useContext(TasksContext);
    if (tasks === undefined) {
        // throw new Error("there is no data to display")
        return []
    }

    return tasks
}