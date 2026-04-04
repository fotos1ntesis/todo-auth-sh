import {useDispatch, useSelector} from 'react-redux';
import {addTask, clearAllTasks, deleteTask} from '../store/slices/tasksSlice';

export const useTasks = () => {
    const dispatch = useDispatch();
    const {items, maxTask} = useSelector((state) => state.tasks);

    return {
        tasks: items,
        maxTask,
        addTask: (task) => dispatch(addTask(task)),
        deleteTask: (index) => dispatch(deleteTask(index)),
        clearAllTasks: () => dispatch(clearAllTasks()),
    };
};