import { Coins } from './Coins';
import { ICoin } from '../types/Coin';

interface CoinsListProps {
  coins: ICoin[];
}

export default function CoinsList({ coins }: CoinsListProps) {
  return (
    <>
      {coins.map((coin) => (
        <Coins
          key={coin.id}
          name={coin.name}
          id={coin.id}
          current_price={coin.current_price}
          symbol={coin.symbol}
          market_cap={coin.market_cap}
          total_volume={coin.total_volume}
          image={coin.image}
          price_change_percentage_24h={coin.price_change_percentage_24h}
        />
      ))}
    </>
  );
}
