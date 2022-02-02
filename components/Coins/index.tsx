import { ICoin } from '../../types/Coin';

import styles from './Coins.module.css';

interface CoinsProps extends ICoin {}

export function Coins({
  name,
  current_price,
  symbol,
  market_cap,
  total_volume,
  image,
  price_change_percentage_24h,
  id,
}: CoinsProps) {
  return (
    <a>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <img src={image} alt={name} className={styles.coin_img} />
            <h1 className={styles.coin_h1}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.coin_data}>
            <p className={styles.coin_price}>${current_price}</p>
            <p className={styles.coin_volume}>
              ${total_volume.toLocaleString()}
            </p>

            {price_change_percentage_24h < 0 ? (
              <p className={(styles.coin_percent, styles.red)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.coin_percent, styles.green)}>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            )}

            <p className={styles.coin_marketcap}>
              Mkt Cap: ${market_cap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
