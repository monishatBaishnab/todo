import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import TodoCard from "./TodoCard";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const TodoContainer = () => {
    // const { todos: fetchedTodos, todoLoading, todoRefetch } = useFetchTodos();
    const fetchedTodos = useLoaderData();
    const [todos, setTodos] = useState(fetchedTodos);
    const getTaskPos = id => todos?.findIndex(task => task._id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id === over.id) return;
        setTodos(todos => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(todos, originalPos, newPos);
        })
    }

    const sensor = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates})
    )

    return (
        <DndContext sensors={sensor} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            {
                
                <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                    <div className="w-full p-5 bg-slate-100 mt-5 rounded-md space-y-5 touch-none">
                        {
                            todos?.map(todo => <TodoCard key={todo?._id} todo={todo} />)
                        }
                    </div>
                </SortableContext>
            }
        </DndContext>

    );
};

export default TodoContainer;