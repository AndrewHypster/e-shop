'use client'
import { useState } from 'react';
import './card.css'
import { ABlock } from '../link/link';
import InputNum from '../input/input';
import { useCart } from '@/context';

const Card = ({type, firm, name, price, img, link='#'}) => {
  const [quantity, setQuantity] = useState(1);
  const { openForm } = useCart();

  return (
    <div href={link} className="card">
      <div className="relative">
        <ABlock href={link}>
          <div
            className="card-img"
            style={{ backgroundImage: `url(${img})` }}
          />
          <CardType type={type} />
        </ABlock>
      </div>
      <div className="card-content">
        <div className="card-text">
          <small className="card-kind">{firm}</small>
          <b className="card-name">{name}</b>
        </div>
        <span className="card-price">{price * quantity}грн</span>
        <form className="card-form">
          <InputNum value={quantity} onChange={setQuantity} />
          <button
            type="button"
            className="card-btn"
            onClick={() => openForm({ firm, name, price, quantity })}
          >
            В кошик
          </button>
        </form>
        <div className="card-colors"></div>
      </div>
    </div>
  );
}

const CardType = ({ type }) => {
  if (type == 'new')
    return (
      <small className="card-type card-type-new">Новинка</small>
    )
  else if (type == 'top')
    return (
      <small className="card-type card-type-top">Топ</small>
    )
  else return <></>
}

export default Card