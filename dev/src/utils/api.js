import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchHabits = () => API.get("/habits");
export const addHabit = (habit) => API.post("/habits", habit);
export const markComplete = (id) => API.patch(`/habits/${id}/complete`);


export const BASE_URL=import.meta.env.VITE_API_BASE_URL