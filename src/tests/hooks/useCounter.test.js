import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe('UseCounter', () => {
  it('correct', () => {
    const { result:{ current:{ state, reset, decrement, increment } } } = renderHook(() => useCounter(10));

    expect(state).toBe(10);
    expect(typeof reset).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof increment).toBe('function');
  });


  it('probar funciones (increment)', () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current; 

    act(() => increment());

    const { state } = result.current; 
    
    expect(state).toBe(11);
  });

  it('probar funciones (decrement)', () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current; 

    act(() => decrement());

    const { state } = result.current; 
    
    expect(state).toBe(9);
  });


  it('probar funciones (reset)', () => {
    const { result } = renderHook(() => useCounter(10));
    const { reset, decrement } = result.current; 

    act(() => {
      decrement(); 
      reset();
    });

    const { state } = result.current; 
    
    expect(state).toBe(10);
  });
});
