import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_large_25years@2x.png';
import searchIcon from '../../assets/ic_Search@2x.png';
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
          <img className={'header__logo'} src={logo} alt={'Mercado Libre logo'} />
        </Link>
        <form className={'header__form'} onSubmit={handleSubmit}>
          <input
            id="keyword"
            name="keyword"
            className={'header__input'}
            type="text"
            placeholder="Buscar productos, marcas y mas..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            autoComplete="off"
          />
          <button className={'header__button'} type="submit">
            <img className={'header__search-icon'} src={searchIcon} alt={'Search icon'} />
          </button>
        </form>
      </div>
    </div>
  );
};
