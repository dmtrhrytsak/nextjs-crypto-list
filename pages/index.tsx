import { useState } from 'react';
import { GetServerSideProps } from 'next';

import { SearchBar } from '../components/SearchBar';
import CoinsList from '../components/CoinsList';
import Layout from '../components/Layout';
import { ICoin } from '../types/Coin';

interface HomeProps {
  coins: ICoin[];
}

export default function Home({ coins }: HomeProps) {
  const [search, setSearch] = useState('');

  const allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinsList coins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'
  );

  const coins = await res.json();

  return {
    props: {
      coins,
    },
  };
};
