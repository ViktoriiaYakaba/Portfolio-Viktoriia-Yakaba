import { useState, useContext} from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { RiMoonClearLine } from 'react-icons/ri';
import { Headers, Nav, NavLogo, NavLogoCircle, NavLogoName} from './Header.styled';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleTheme } = useContext(ThemeContext);

     const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
          <Headers id='header'>
              <Nav>
                  <NavLogo>
                      <NavLogoCircle>It</NavLogoCircle>
                      <NavLogoName>Yakaba Viktorria</NavLogoName>
                      
                  </NavLogo>
                  
              </Nav>
              
      </Headers>
    </div>
  )
}

export default Header;
