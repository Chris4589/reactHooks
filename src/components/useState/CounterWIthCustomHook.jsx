import useCounter from "../../hooks/useCounter";

const CounterWIthCustomHook = () => {

  const { state:counter, increment, decrement, reset } = useCounter(12);

  return (
    <>
    ----
      <h1>Num { counter }</h1>
      <hr />
      <button onClick={ () => increment() }>
        +1 counter1
      </button>

      <button onClick={ () => decrement() }>
        -1 counter1
      </button>

      <button onClick={ () => reset() }>
        reset
      </button>
    </>
  );
}

export default CounterWIthCustomHook;