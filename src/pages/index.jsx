import Home from '../templates/Home';
import P from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';

export default function Index({ data }) {
  return <Home data={data} />;
}

Index.propTypes = {
  name: P.string,
};

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const pageData = mapData([attributes]);
  const data = pageData;

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
