import { act, renderHook } from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";

describe('pruebas en useForm', () => {
    const inicialForm = {
        name: 'Jhon',
        email: 'jhon@gmail.com'
    };

    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(inicialForm)); 
        const [values ]= result.current;
        console.log(values);
        expect(values.name).toEqual('Jhon');
        expect(values.email).toEqual('jhon@gmail.com');
    })
    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook( () => useForm(inicialForm) ); 
        const [, handleInputChange]= result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Angel' 
                } 
            });
        });
        const [values] = result.current;
        expect(values.name).toEqual('Angel'); 
    })
    
    test('debe de re-establecer el formulario con RESET', () => {
        const {result} = renderHook( () => useForm(inicialForm));
        const [,handleInputChange, reset]= result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Angel'
                }
            })
            reset();
        })
        const [values] = result.current;
        expect(values).toEqual(inicialForm);
    })
     

})