import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slice';

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button onClick={()=> dispatch(decrement(1))}>-</button>
            {value}
        <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};
