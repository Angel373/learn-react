import React from 'react';
import { shallow } from "enzyme"
import {RealExampleRef} from '../../../components/04-useRef/RealExampleRef'

describe('pruebas en el componente <RealExamplesRef />', () => {
    const wrapper = shallow(<RealExampleRef/>);
    test('debe de retornar el componente <RealExamplesRef', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.filter('MultipleCustomHooks').exists()).toBe(false);
    })

    test('debe de mostrar el componente <MulitpleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');

        expect(wrapper.filter('MultipleCustomHooks').exists()).toBe(false);
    })
    
     
})
