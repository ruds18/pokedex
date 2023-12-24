import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount, toggle } from './features/couter/couterSlice'

function App() {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.counter.isOpen);
  console.log(isOpen)
  return (
    <div className=''>
      <Typography variant='h1'>
         Redux Toolkit!
      </Typography>
          <Typography variant='h1'>{count}</Typography>
      <Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant='contained' onClick={() => dispatch(decrement())}>Decerement</Button>
      <Button variant='contained' onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</Button>
      <Button variant='contained' onClick={()=>  dispatch(toggle())}>Toggle</Button>
    </div>
  )
}

export default App
