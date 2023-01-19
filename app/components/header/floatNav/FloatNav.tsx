import { NavProps } from 'components/header/HeaderNav';
import { AiOutlineHome } from 'react-icons/ai';

import './FloatNav.scss';

function FloatNav({ currentHash, sectionLinks }: NavProps) {
  const menu = sectionLinks.map(link => {
    return (
      <a
        // smooth
        href={link.hash}
        className={currentHash === link.hash ? 'active' : ''}
        key={link.hash}>
        {link.icon}
      </a>
    );
  });

  return (
    <>
      <nav className='floatNav'>
        <a
          // smooth
          href='/#'
          className={currentHash === '' ? 'active' : ''}>
          <AiOutlineHome />
        </a>
        {menu}
      </nav>
    </>
  );
}

export default FloatNav;
