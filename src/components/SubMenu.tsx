// SubMenu.tsx

import React from 'react';
import { SubMenuItem } from '../types';

interface SubMenuProps {
    items: SubMenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                <a href={item.link}>{item.name}</a>
            </li>
        ))}
    </ul>
);

export default SubMenu;
