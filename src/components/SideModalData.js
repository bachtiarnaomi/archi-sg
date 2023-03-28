import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideModalData = [
  {
    header: 'BCA',
    content: [
      {
        title: 'Approved Document 2019',
        path: 'https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/codes-acts-and-regulations/approveddoc.pdf',
        cName: 'nav-text',
      },
      {
        title: 'Accessibility Code 2019',
        path: 'https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/codes-acts-and-regulations/accessibilitycode2019.pdf?sfvrsn=ea84e8b7_0',
        cName: 'nav-text',
      },
      {
        title: 'Buildability Score 2019',
        path: 'https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/buildability-series/cop-on-buildability-2019.pdf?sfvrsn=d8526675_0',
        cName: 'nav-text',
      },
      {
        title: 'Code of Environmental Sustainability 4.0',
        path: '',
        cName: 'nav-text',
      },
      {
        title: 'Green Mark 2021',
        path: 'https://www1.bca.gov.sg/buildsg/sustainability/green-mark-certification-scheme/green-mark-2021',
        cName: 'nav-text',
      },
      {
        title: 'ETTV RTTV RETV',
        path: '',
        cName: 'nav-text',
      },
      {
        title: 'Household / Storey / Staircase Shelter',
        path: '',
        cName: 'nav-text',
      },
    ],
  },
  {
    header: 'URA',
    content: [
      {
        title: 'Conservation Guidelines',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Conservation/Conservation-Guidelines',
        cName: 'nav-text',
      },
      {
        title: 'Lush 3.0',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc17-06',
        cName: 'nav-text',
      },
      {
        title: 'Walking and Cycling Guide',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/-/media/BD725DB201DB496A93569C8072DD9FD0.ashx',
        cName: 'nav-text',
      },
      {
        title: 'Strata Subdivision',
        path: '',
        cName: 'nav-text',
      },
      {
        title: 'Urban Design Guideline',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Urban-Design',
        cName: 'nav-text',
      },
      {
        title: 'Outline Application',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/Outline-Application',
        cName: 'nav-text',
      },
      {
        title: 'Pre-Application Consultation Service (PACS)',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc18-01',
        cName: 'nav-text',
      },
      {
        title: 'Exemption List',
        path: '',
        cName: 'nav-text',
      },
    ],
  },
  {
    header: 'SCDF',
    content: [
      {
        title:
          'Code of Practice (COP) for Fire Precautions in Buildings 2018 (Effective 1 Mar 2019, Updated on 1 Mar 2022)',
        path: 'https://www.scdf.gov.sg/docs/default-source/scdf-library/fssd-downloads/fire7-jan-19.pdf',
      },
      {
        title: 'COP for Fire Precautions in Rapid Transit System (2017)',
        path: 'https://www.scdf.gov.sg/docs/default-source/scdf-library/fssd-downloads/rts/cpfprts2017-ppage-nonint-07072017.pdf',
      },
      {
        title: 'Technical Requirements for Storey Shelter (2021)',
        path: 'https://www.scdf.gov.sg/docs/default-source/scdf-library/fssd-downloads/technical-requirements-for-storey-shelters-2021.pdf',
      },
      {
        title: 'Technical Requirements for Household Shelter (2017)',
        path: 'https://www.scdf.gov.sg/docs/default-source/scdf-library/fssd-downloads/technical_requirements_for_household_shelters_hstr_2017.pdf',
      },
    ],
  },
];
