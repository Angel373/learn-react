import { mount } from "enzyme"
import React from 'react'
import {HomeScreen} from '../../../components/09-useContext/HomeScreen'
import { UserContext } from "../../../components/09-useContext/UserContext"
describe('Pruebas en el componente <HomeScreen/>', () => {
    test('debe de mostrarse correctamente', () => {
        
        const user = {
            name: 'jhon',
            email: 'jhon@gamil.com'
        }
        const wrapper = mount(
            <UserContext.Provider value={{
                user
            }}>
                
                <HomeScreen/>
            </UserContext.Provider>

        )
        expect(wrapper).toMatchSnapshot();
    })
    
})
