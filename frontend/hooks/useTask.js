import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

export const useTask = () => {
    const context = useContext(TaskContext)

    if(!context) {
        throw Error('use the Context Provider inside the App')
    }

    return context
}