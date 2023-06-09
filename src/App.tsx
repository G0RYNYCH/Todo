import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {
    // const users: IUser[] =[
    //     {id: 1, name: 'name1', email: 'email1', address: {city: 'city1', street: 'street1', zipcode: 'zipcode1'}},
    //     {id: 2, name: 'name2', email: 'email2', address: {city: 'city2', street: 'street2', zipcode: 'zipcode2'}}
    // ]

    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <EventsExample/>
            <Card width='200px' height='200px' variant={CardVariant.outlined}>
                <button>Button</button>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;