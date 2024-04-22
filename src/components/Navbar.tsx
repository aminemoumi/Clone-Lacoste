// NavBar.tsx

import React from 'react';
import { MenuItem } from '../types';
import Logo from './Logo';
import MenuLink from './MenuLink';

interface NavBarProps {
    menuItems: MenuItem[];
}

const NavBar: React.FC<NavBarProps> = ({ menuItems }) => (
    <nav>
        <Logo />
        <ul className="centro">
            {menuItems.map((item, index) => (
                <MenuLink key={index} {...item} />
            ))}
        </ul>
    </nav>
);

export default NavBar;
