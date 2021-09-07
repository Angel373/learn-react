import { shallow } from 'enzyme';
import React from 'react';
import {TodoListItem} from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../fixtures/demoTodos';

describe('pruebas en TodoListItem', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = {demoTodos[0]}
            handleToggle = {handleToggle}
            handleDelete = {handleDelete}
            i = {0}
        />
    );

    test('debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
    })
    
    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    })
    
    test('debe de mostrar el texto correctamente', () =>{
        
        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    })
    test('debe de tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem 
                todo = {todo}
            />
        );
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
})
