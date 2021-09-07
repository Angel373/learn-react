import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import React from 'react'
import { demoTodos } from "../fixtures/demoTodos"

describe('pruebas en TodoList', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<TodoList
        todos = {demoTodos}
        handleToggle = {handleToggle}
        handleDelete = {handleDelete}
    />);
    test('debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener dos <TodoListItem />', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    
    
})
