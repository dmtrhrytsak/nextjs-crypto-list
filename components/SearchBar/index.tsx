import styles from './SearchBar.module.css';

export function SearchBar({ ...rest }) {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest} />
    </div>
  );
}
