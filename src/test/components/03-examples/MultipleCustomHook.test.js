import { shallow } from 'enzyme';
import React from 'react';
import {MultipleCustomHooks} from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('pruebas en el componente <multipleCustomHook />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
    test('debe mostrar correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de retornar la informacion', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Jhon',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe("Hola mundo");
        expect(wrapper.find('footer').text().trim()).toBe("Jhon");
        // console.log( wrapper.html());
    })
    
    
})