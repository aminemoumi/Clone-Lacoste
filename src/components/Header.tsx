// Header.tsx

import React from 'react';
import { MenuItem } from '../types';
import NavBar from '../components/Navbar';

interface HeaderProps {
    menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => (
    <header>
        <NavBar menuItems={menuItems} />
    </header>
);

export default Header;

