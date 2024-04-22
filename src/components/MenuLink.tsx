// MenuLink.tsx

import React from 'react';
import { MenuItem } from '../types';
import SubMenu from './SubMenu';

const MenuLink: React.FC<MenuItem> = ({ name, link, subMenu }) => (
    <li>
        <a href={link}>{name}</a>
        {subMenu && <SubMenu items={subMenu} />}
    </li>
);

export default MenuLink;
