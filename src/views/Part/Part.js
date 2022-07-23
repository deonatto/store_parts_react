import React from 'react';
import './Part.css';
import {useSearchParams, Link} from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';

const Part = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const type = searchParams.get('type');
  const price = searchParams.get('price');

  return (
    <Wrapper>
      <div className='part-view-title-container'>
        <Link className='part-view-link' to="/"><i className="fa-solid fa-arrow-left"/></Link>
        <h1 className='title'>Store Parts</h1>
      </div>
        <div className='part-view-container'>
          <div className='part-view-titles-container'>
            <h2>Name</h2>
            <h2>Type</h2>
            <h2>Price</h2>
          </div>
          <div className='part-view-params-container'>
            <div className='params-wrapper'>
              <p className='start'>{name}</p>
            </div>
            <div className='params-wrapper'>
              <p className='start'>{type}</p>
            </div>
            <div className='params-wrapper'>
              <p className='start'>{price}</p>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Part;