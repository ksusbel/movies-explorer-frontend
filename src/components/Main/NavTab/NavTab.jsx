import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
    return (
        <nav className='nav-tab'>
      <HashLink smooth to='#about-project' className='nav-tab__button'>О проекте</HashLink>
      <HashLink smooth to='#techs' className='nav-tab__button'>Технологии</HashLink>
      <HashLink smooth to='#about-me' className='nav-tab__button'>Студент</HashLink>
    </nav>
    );
}

export default NavTab;