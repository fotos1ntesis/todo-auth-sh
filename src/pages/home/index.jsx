import React from "react";

import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/useAuth.js";
import {useTasks} from "../../hooks/useTasks.js";

import {removeUser} from "../../store/slices/userSlice.js";

import {Alert, Button, Input} from "antd";
import {CloseOutlined} from "@ant-design/icons";

export default function HomePage() {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();
    const {tasks, maxTask, addTask, deleteTask} = useTasks();

    const [input, setInput] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleAddTask = () => {
        if (input.trim()) {
            addTask(input);
            setInput("");
            setError(false);
        } else {
            setError(true);
        }
    };

    const handleAddTaskOnKey = (e) => {
        if (e.key === "Enter") {
            if (input.trim()) {
                addTask(input);
                setInput("");
                setError(false);
            } else {
                setError(true);
            }
        }
    };

    const handleDeleteTask = (index) => {
        deleteTask(index);
    };

    // const handleAllDeleteTask = () => {
    //     clearAllTasks();
    // };

    return isAuth ? (
        <main className="form">
            <span>Привет, {email}</span>

            <h1 className="font-semibold text-2xl">
                To do list {tasks.length}/{maxTask}
            </h1>

            {/*<button onClick={handleAllDeleteTask}>Удалить все таски</button>*/}

            {error && (
                <Alert
                    title="Введите текст в поле ввода"
                    type="error"
                    style={{
                        height: "35px",
                        fontSize: "13px",
                        borderRadius: "8px",
                        color: "#B22222",
                        width: "100%",
                        textAlign: "center",
                    }}
                />
            )}

            <Input
                maxLength="30"
                placeholder={
                    tasks.length >= maxTask
                        ? `Лимит ${maxTask} задач достигнут`
                        : "Введите текст"
                }
                disabled={tasks.length >= maxTask}
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleAddTaskOnKey}
            />

            <Button
                type="primary"
                disabled={tasks.length >= maxTask}
                onClick={handleAddTask}
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}
            >
                Добавить
            </Button>

            <Button
                type="text"
                onClick={() => dispatch(removeUser())}
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}
            >
                Выйти из аккаунта
            </Button>

            <div className="flex flex-col flex-1 gap-y-2 max-h-[calc(100%-150px)]">
                {tasks.length > 0 ? (
                    tasks.slice(0, maxTask).map((task, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center py-2 px-3 bg-[#f5f5f5] rounded-lg font-medium"
                        >
                            <p className="text-[12px] first-letter:uppercase">{task}</p>
                            <span
                                className="transition duration-300 ease hover:text-[#B22222] cursor-pointer"
                                onClick={() => handleDeleteTask(index)}
                            >
                <CloseOutlined/>
              </span>
                        </div>
                    ))
                ) : (
                    <p className="text-[12px]">Нет задач</p>
                )}
            </div>
        </main>
    ) : (
        <Navigate to="/login"/>
    );
}