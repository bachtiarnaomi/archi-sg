import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideModalData } from './SideModalData';
import { SideContext } from '../helpers/Contexts';

const SideModal = () => {
  const { modal, sidebar } = useContext(SideContext);
  return (
    <div
      className={modal ? 'dropdown-menu active' : 'dropdown-menu'}
      style={{
        marginLeft: sidebar ? ' 250px' : ' 65px',
        width: sidebar ? ' calc(100% - 265px)' : ' calc(100% - 80px)',
      }}
    >
      <div className="modal">
        {SideModalData.map((item, index) => {
          return (
            <div className="modal-section">
              <h1 key={index} className="nav-text">
                {item.header}
              </h1>
              {item.content.map((resource) => {
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
          );
        })}
      </div>
    </div>
  );
};

export default SideModal;
