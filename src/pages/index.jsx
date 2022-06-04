import Home from '../templates/Home';
import P from 'prop-types';

export default function Index({ name }) {
  console.log(name);
  return <Home />;
}

Index.propTypes = {
  name: P.string,
};

export const getStaticProps = async () => {
  return {
    props: {
      name: 'Luiz',
    },
  };
};
