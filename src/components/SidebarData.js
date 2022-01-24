import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        classStyle: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdPaper />,
        classStyle: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillContacts />,
        classStyle: 'nav-text'
    }
]