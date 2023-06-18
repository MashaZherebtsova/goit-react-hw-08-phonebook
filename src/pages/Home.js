import { Container } from './Home.styled';

const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Container>
      <h1 style={styles.title}>
        Welcome to fhonebook{' '}
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
      </h1>
    </Container>
  );
}
