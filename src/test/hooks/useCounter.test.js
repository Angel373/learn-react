import {act, renderHook} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter'
describe('Pruebas en useCounter', () => {
    
    test('debe retornar correctamente', () => {
        const {result} = renderHook( () => useCounter());    
        
        expect(result.current.counter).toBe(10);
        expect( typeof result.current.increment).toBe('function');
        expect( typeof result.current.decrement).toBe('function');
        expect( typeof result.current.reset).toBe('function');
    })

    test('debe de retornar el valor de 100', () => {
        const {result} = renderHook(()=> useCounter(100));
        expect(result.current.counter).toBe(100);
    })
    test('debe de retornar el counter incrementado', () => {
        const {result} = renderHook(()=> useCounter(5));
        const {increment} = result.current;
        act(() => {
            increment();
        });
        expect(result.current.counter).toBe(6);
    })
    test('debe de retornar el counter decrementado', () => {
        const {result} = renderHook(()=> useCounter(5));
        const {decrement} = result.current;
        act(() => {
            decrement();
        });
        expect(result.current.counter).toBe(4);
    })
    test('debe de retear el valor del counter', () =>{
        const {result} = renderHook(()=> useCounter(15));
        const {reset} = result.current;
        act(() => {
            reset(); 
        });
        expect(result.current.counter).toBe(15);
    })

})
