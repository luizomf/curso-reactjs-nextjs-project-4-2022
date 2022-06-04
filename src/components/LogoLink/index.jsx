import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import Image from 'next/image';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && (
          <Image src={srcImg} alt={text} width="100%" height="100%" />
        )}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
