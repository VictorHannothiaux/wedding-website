import { withRouter } from 'next/router';
import Link from 'next/link';
import theme from '../utils/theme';
import HeaderStyles from './styles/Header';

const Header = ({ router }) => {
  const currentRoute = router.asPath;
  const applySelected = targetRoute =>
    targetRoute === currentRoute ? { color: theme.copper } : null;

  return (
    <HeaderStyles>
      <div className="title">
        <Link href="/">
          <a style={applySelected('/')}>Mariage de Victor et Jeanne-Marie</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/schedule">
            <a style={applySelected('/schedule')}>Calendrier</a>
          </Link>
        </li>
        <li>
          <Link href="/lodging">
            <a style={applySelected('/lodging')}>Logement</a>
          </Link>
        </li>

        <li>
          <Link href="/gifts">
            <a style={applySelected('/gifts')}>Liste de mariage</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a style={applySelected('/contact')}>Contact</a>
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  );
};

export default withRouter(Header);
