import styled from 'styled-components';
import Collage from './Collage';
import theme from '../utils/theme';
import { mobile } from '../utils/mediaQueries';

const HomeStyles = styled.div`
  align-items: center;
  color: ${theme.offBlack};
  display: flex;
  flex-direction: column;
  font-family: ${theme.titleFont};
  justify-content: center;
  padding: 5rem 0;
  .date {
    font-size: ${theme.subheadFontSize};
    margin-top: 9.5rem;
    ${mobile} {
      margin-top: 7.5rem;
    }
  }
  .location {
    font-size: ${theme.h3FontSize};
  }
`;

const Home = props => (
  <HomeStyles>
    <Collage />
    <span className="date">3 Septembre 2021</span>
    <span className="location">Château de Cheviers, Juvigny-Val-d'Andaine</span>
  </HomeStyles>
);

export default Home;
