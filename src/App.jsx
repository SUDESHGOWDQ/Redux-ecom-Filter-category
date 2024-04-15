import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData, setFilter, selectedFilter } from './features/dataSlice';
import './App.css'

const App = () => {


  const[search,setSearch]=useState('')

  const dispatch = useDispatch();
  const data = useSelector(selectedFilter);
  

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  

  return (
    <div>
      <div className='Nav'>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('men')}>Men</button>
        <button onClick={() => handleFilterChange('jewelery')}>jewelery</button>
        <button onClick={() => handleFilterChange('women')}>WoMen</button>
        <button onClick={() => handleFilterChange('electronics')}>Electronics</button>
        <br></br>
        <div className='form'>
        <input type='text' placeholder='Search Product' onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
      </div>
      <div className='Cardsec'>
        {data.filter((item)=>item.category.toLowerCase().includes(search)).map((item) => {
          return(
            <div className='Card' key={item.id}>
            <img src={item.image} height={'200px'} width={'200px'}/>
            <h5>{item.title}</h5>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button>Add Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default App;
