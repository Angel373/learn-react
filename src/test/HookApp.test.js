import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('pruebas en el componente <HookApp />', () => {
    test('debe retornar el contenido del componente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
     
})
