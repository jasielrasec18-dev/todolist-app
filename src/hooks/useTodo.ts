import { useState } from "react"

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    function addTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const todoItem = formData.get('todo') as string

        if (!todoItem.trim()) return

        setTodoList((prev) => [
            ...prev,
            {
                id: Date.now(),
                title: todoItem,
                completed: false,
            },
        ])

        event.currentTarget.reset()
    }

    function toggleTodoCompleted(id: number) {
        const newTodo = todoList.map(todo => {
            if (todo.id === id) {
                const completed = !todo.completed

                return {
                    ...todo,
                    completed
                }
            }

            return todo
        })

        setTodoList(newTodo)
    }

    const filteredTodos = todoList.filter(todo => {
        if (filter === 'active') return !todo.completed
        if (filter === 'completed') return todo.completed
        return true
    })

    function clearSelected() {
        setTodoList(prev => prev.filter(todo => !todo.completed))
    }
    
    function removeTodo(id: number) {
        setTodoList(prev => prev.filter(todo => todo.id !== id))
    }

    return {
        addTodo,
        toggleTodoCompleted,
        filter,
        setFilter,
        filteredTodos,
        clearSelected,
        removeTodo
    }
}