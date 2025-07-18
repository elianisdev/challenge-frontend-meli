import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = searchKeyword.trim();
    if (keyword) {
      setSearchKeyword(keyword);
      navigate(`/items?search=${keyword}`);
    }
  };

  return (
    <div className={'header'}>
      <div className={'header__container'}>
          <Link to={'/'}>
            <img className={'header__logo'} src={'src/assets/logo_large_25years@2x.png'} alt={'Mercado Libre logo'}/>
          </Link>
        <form className={'header__form'} onSubmit={handleSubmit}>
          <input
            id='keyword'
            name='keyword'
            className={'header__input'}
            type="text"
            placeholder="Buscar productos, marcas y mas..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            autoComplete='off'
          />
          <button className={'header__button'} type="submit">
            <img
              className={'header__search-icon'}
              src={'src/assets/ic_Search@2x.png.png'}
              alt={'Search icon'}
            />
          </button>
        </form>
      </div>
    </div>
  );
};
