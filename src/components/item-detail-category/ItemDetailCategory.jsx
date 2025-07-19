import { Link, useNavigate } from 'react-router-dom';
import './ItemDetailCategory.scss';

export const ItemDetailCategory = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div className="item-detail-category">
      <p className="item-detail-category__text">
        <Link to="/" onClick={() => navigate(-1)}>
          Volver al listado
        </Link>
        <span className="item-detail-category__text-value"> | {category}</span>
      </p>

      <span className="item-detail-category__publication">
        Publicación:
        <b> #1117098545</b>
      </span>
    </div>
  );
};
