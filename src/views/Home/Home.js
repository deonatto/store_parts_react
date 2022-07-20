import React, {useState,useEffect} from 'react';
import './Home.css';
import Wrapper from '../../components/Wrapper/Wrapper';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import SortBtn from '../../components/SortBtn/SortBtn';
import TypeBtn from '../../components/TypeBtn/TypeBtn';

const Home = () => {
  const [types, setTypes] = useState(null);
  const [type, setType] = useState(null);

  useEffect(()=>{
    //get all types
    const getTypes=async()=>{
      try{
        const res = await fetch('http://localhost:8081/store/part-types',{
            method: 'GET'
        });
        if(res.status === 200){
          const data = await res.json();
          setTypes(data);
        }
      }catch(err){
        console.log(err);
      }
    }
    getTypes();
  },[]);

  //set type selected by user
  const typeHandler=(typeSelected)=>{
    setType(typeSelected);
  }

  return (
    <Wrapper>
      <h1 className='title'>Store Parts</h1>
      <div className='btns-container'>
        <SearchBtn />
        <TypeBtn types={types} typeHandler={typeHandler}/>
        <SortBtn />
      </div>
    </Wrapper>
  )
}

export default Home;