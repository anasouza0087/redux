import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, log, out } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </>
      <>
        {logged == true ?
          <>
            <h3>Bem vindo!</h3>
            <button onClick={() => dispatch(out())}>Sair</button>
          </>
          :
          <>
            <h3>Faça login para prosseguir</h3>
            <button onClick={() => dispatch(log())}>Entrar</button>
          </>
        }
      </>
    </div>
  );
}

export default App;
