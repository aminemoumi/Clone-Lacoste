// App.tsx

import React from 'react';
import Header from '../src/components/Header';
import { MenuItem } from './types';

const App: React.FC = () => {
    const menuItems: MenuItem[] = [
        {
            name: "Homme",
            link: "#",
            subMenu: [
                { name: "Vêtements", link: "#" },
                { name: "Chaussures", link: "#" },
                { name: "Accessoires", link: "#" },
                { name: "Sport", link: "#" }
            ]
        },
        // Plus d'items ici
    ];

    return (
        <div>
            <Header menuItems={menuItems} />
            {/* D'autres composants ici */}
        </div>
    );
};

export default App;

