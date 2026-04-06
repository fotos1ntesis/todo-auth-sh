import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const savedItems = localStorage.getItem('task');
    return savedItems ? JSON.parse(savedItems) : [];
  } catch (error) {
    console.error('Ошибка загрузки из localStorage:', error);
    return [];
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: loadFromLocalStorage(),
    maxTask: 5,
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      if (newTask.trim() && state.items.length < state.maxTask) {
        state.items.push(newTask);
      }
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.items = state.items.filter((_, i) => i !== index);
    },
    clearAllTasks: (state) => {
      state.items = [];
    },
  },
});

export const { addTask, deleteTask, clearAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
