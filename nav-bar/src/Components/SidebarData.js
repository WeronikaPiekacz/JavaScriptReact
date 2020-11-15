import React from 'react'
import {BiHomeHeart} from 'react-icons/bi';
import {GiMailbox} from 'react-icons/gi';
import {VscPerson} from 'react-icons/vsc';
import {MdSettings} from 'react-icons/md';
import {SiDatadog} from 'react-icons/si';

export const SidebarData= [
    {
        title: "Home",
        icon: <BiHomeHeart />,
        link: "/home"
    },
    {
        title: "Mail",
        icon: <GiMailbox />,
        link: "/mail"
    },
    {
        title: "Account",
        icon: <VscPerson />,
        link: "/account"
    },
    {
        title: "Gallery",
        icon: <SiDatadog/>,
        link: "/gallery"
    },
    {
        title: "Setting",
        icon: <MdSettings />,
        link: "/setting"
    }
]

