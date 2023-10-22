import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to the PHONEBOOK storage app! 👀
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        <p>
          You can view your &nbsp;
          <Link to="/contacts">contacts</Link>
        </p>
      </h1>
    </div>
  );
}
