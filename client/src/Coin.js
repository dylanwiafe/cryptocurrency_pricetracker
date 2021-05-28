import React from "react";
import "./Coin.scss";

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className="coin">
      <div className="coin__row">
        <div className="coin__image-name-symbol">
          <img src={image} alt="cryptocurrency logo" className="coin__image" />
          <h1 className="coin__name">{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <div className="coin__data">
          <p className="coin__price">${price}</p>
          <p className="coin__volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin__percent-red">{priceChange.toFixed(2)}</p>
          ) : (
            <p className="coin__percent-green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
