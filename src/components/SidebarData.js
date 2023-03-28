import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Reference Materials',
    path: '/',
    icon: <AiIcons.AiFillFolderOpen />,
    cName: 'nav-text',
  },
  {
    title: 'BOA Logsheet',
    path: '/',
    icon: <AiIcons.AiOutlineDownload />,
    cName: 'nav-text',
  },
  {
    title: 'Past Year Paper',
    path: '/',
    icon: <AiIcons.AiOutlineFileText />,
    cName: 'nav-text',
  },
];
