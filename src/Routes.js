import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserManagement from './UserManagement';
import TemperatureConverter from './TemperatureConverter';
import Context from './Components/Context/Context';
import DynamicContext from './Components/Context/DynamicContext';

function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No match for URL <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export const routes = [
    {
        component: Home,
        path: '/',
        headingTitle: null,
        exact: true,
        isFeatured: false
    }
    , {
        component: UserManagement,
        path: '/usermanagement',
        headingTitle: 'User Management',
        exact: false,
        isFeatured: true
    }
    , {
        component: TemperatureConverter,
        path: '/temperatureconverter',
        headingTitle: 'Temp Converter',
        exact: false,
        isFeatured: true
    }
    , {
        component: Context,
        path: '/context',
        headingTitle: 'Context',
        exact: false,
        isFeatured: true
    }
    , {
        component: DynamicContext,
        path: '/dynamiccontext',
        headingTitle: 'Dynamic Context',
        exact: false,
        isFeatured: true
    }
    , {
        component: About,
        path: '/about',
        headingTitle: null,
        exact: false,
        isFeatured: false
    }
    , {
        component: Contact,
        path: '/contact',
        headingTitle: null,
        exact: false,
        isFeatured: false
    }
    , {
        component: NoMatch,
        path: null,
        headingTitle: null,
        exact: false,
        isFeatured: false
    }
]