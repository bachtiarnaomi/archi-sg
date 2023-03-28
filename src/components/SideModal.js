import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideModalData } from './SideModalData';

const SideModal = ({ modal }) => {
  return (
    <div className={modal ? 'dropdown-menu active' : 'dropdown-menu'}>
      <div className="modal">
        {SideModalData.map((item, index) => {
          return (
            <div className="modal-section">
              <h1 key={index} className="nav-text">
                {item.header}
              </h1>
              {item.content.map((resource) => {
                console.log('resource', resource);
                return (
                  <Link
                    className={
                      resource.path != ''
                        ? 'resource-link available'
                        : 'resource-link'
                    }
                    to={resource.path}
                  >
                    {resource.title}
                  </Link>
                );
              })}
            </div>
            //   <ul key={index} className={item.cName}>
            //     <Link to={item.path}>
            //       {item.icon}
            //       <span>{item.title}</span>
            //     </Link>
            //   </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SideModal;
