import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({
  id,
  imgUrl,
  company,
  title,
  description,
  subtitle,
  portions: { portion, promo },
  weight,
  quantity,
}) => {
  const [selected, setSelected] = useState(false);
  const itemStyle = (bool) => {
    let style = '';
    if (!bool) {
      style = styles.item;
    } else {
      style = quantity > 0 ? styles.itemSelected : styles.itemDisable;
    }
    return style;
  };
  const textDescrip = (bool) => {
    let text = '';
    if (!bool) {
      text = (
        <p className={styles.bottomText}>
          Чего сидишь? Порадуй котэ,{' '}
          <span className={styles.link} onClick={() => setSelected(!selected)}>
            купи.
          </span>
        </p>
      );
    } else {
      text =
        quantity > 0 ? (
          <p className={styles.bottomText}>{description}</p>
        ) : (
          <p className={styles.bottomText}>Печалька, {subtitle} закончился.</p>
        );
    }
    return text;
  };
  return (
    <div className={styles.block}>
      <div className={itemStyle(selected)} onClick={() => setSelected(!selected)}>
        <p className={styles.topText}>{company}</p>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.subTitle}>{subtitle}</h3>
        <p className={styles.text}>{portion}</p>
        <p className={styles.text}>{promo}</p>
        <img src={imgUrl} alt="img" className={styles.img} />
        <div className={styles.blockWeight}>
          <h1 className={styles.weight}>{weight}</h1>
          <span className={styles.weightText}>кг</span>
        </div>
      </div>
      {textDescrip(selected)}
    </div>
  );
};

export default Card;
