import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        classN: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdPaper />,
        classN: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillContacts />,
        classN: 'nav-text'
    }
]