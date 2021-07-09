import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('useForm', () => {

  const initialForm = {
    name: 'chris',
    email: 'chris@gmail.com'
  }

  it('formChange', () => {
    const { result } = renderHook(() => useForm());
    const { handlerOnchange } = result.current;

    act(
      () => handlerOnchange({target:{name:'email', value:initialForm.email}})
    );
    const { email } = result.current;
    
    expect(email).toBe(initialForm.email);
  });
});
