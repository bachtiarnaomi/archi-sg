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
      },
      {
        title: 'Accessibility Code 2019',
        path: 'https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/codes-acts-and-regulations/accessibilitycode2019.pdf?sfvrsn=ea84e8b7_0',
      },
      {
        title: 'Buildability Score 2019',
        path: 'https://www1.bca.gov.sg/docs/default-source/docs-corp-news-and-publications/publications/for-industry/buildability-series/cop-on-buildability-2019.pdf?sfvrsn=d8526675_0',
      },
      {
        title: 'Code of Environmental Sustainability 4.0',
        path: '',
      },
      {
        title: 'Green Mark 2021',
        path: 'https://www1.bca.gov.sg/buildsg/sustainability/green-mark-certification-scheme/green-mark-2021',
      },
      {
        title: 'ETTV RTTV RETV',
        path: '',
      },
      {
        title: 'Household / Storey / Staircase Shelter',
        path: '',
      },
      {
        title: 'PPVC (Prefab Prefinished Volumetric Construction)',
        path: 'https://www1.bca.gov.sg/buildsg/productivity/design-for-manufacturing-and-assembly-dfma/prefabricated-prefinished-volumetric-construction-ppvc',
      },
      {
        title: 'PBU (Prefabricated Bathroom Unit)',
        path: 'https://www1.bca.gov.sg/buildsg/productivity/design-for-manufacturing-and-assembly-dfma/prefabricated-bathroom-unit',
      },
      {
        title: 'Precast Concrete Systems',
        path: 'https://www1.bca.gov.sg/buildsg/productivity/design-for-manufacturing-and-assembly-dfma/advanced-precast-concrete-system',
      },
      {
        title: 'Prefabricated MEP',
        path: 'https://www1.bca.gov.sg/buildsg/productivity/design-for-manufacturing-and-assembly-dfma/prefabricated-mechanical-electrical-plumbing-systems',
      },
      {
        title: 'IDD (Integrated Digital Delivery)',
        path: 'https://www1.bca.gov.sg/buildsg/digitalisation/integrated-digital-delivery-idd',
      },
      {
        title: 'BIM (Building Information Modeling)',
        path: '',
      },
      {
        title: 'VDC (Virtual Design & Coordination)',
        path: 'https://www.corenet.gov.sg/media/2094675/singapore-vdc-guide_version1_oct2017.pdf',
      },
      {
        title: 'DFMA (Design For Manufacturing and Assembly)',
        path: 'https://www1.bca.gov.sg/buildsg/productivity/design-for-manufacturing-and-assembly-dfma',
      },
      {
        title: 'Universal Design',
        path: 'https://www1.bca.gov.sg/regulatory-info/building-control/universal-design-and-friendly-buildings/universal-design-guide',
      },
      {
        title: 'Built Environment Transformation Scheme',
        path: 'https://www1.bca.gov.sg/buildsg/sustainability/green-mark-incentive-schemes/built-environment-transformation-gross-floor-area-incentive-scheme',
      },
      {
        title: 'SGFA',
        path: 'https://www1-bca-gov-sg.cwp-stg.sg/regulatory-info/building-control/structural-plans-and-permit-approvals/guidelines-circulars-advisory-to-prepare-for-plans-and-permit-applications/building-plan-and-structural-plan-fee',
      },
      {
        title:
          'Calculations - SGFA. Min Requirement of Sanitary Facilities (Refer to Code of Accessibility 2019)',
        path: 'https://www.corenet.gov.sg/media/2268627/accessibility-code-2019.pdf',
      },
    ],
  },
  {
    header: 'URA',
    content: [
      {
        title: 'Conservation Guidelines',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Conservation/Conservation-Guidelines',
      },
      {
        title: 'Lush 3.0',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc17-06',
      },
      {
        title: 'Walking and Cycling Guide',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/-/media/BD725DB201DB496A93569C8072DD9FD0.ashx',
      },
      {
        title: 'Strata Subdivision',
        path: '',
      },
      {
        title: 'Urban Design Guideline',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Urban-Design',
      },
      {
        title: 'Outline Application',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/Outline-Application',
      },
      {
        title: 'Pre-Application Consultation Service (PACS)',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc18-01',
      },
      {
        title: 'Exemption List',
        path: '',
      },
      {
        title: 'GFA Exemption Schemes',
        path: '',
      },
      {
        title: 'Circulars (2001 - Present)',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Circulars',
      },
      {
        title: 'Calculations - GFA Handbook',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/gross-floor-area/GFA/Advisory-Notes',
      },
      {
        title: 'Calculations - Plot Ratio',
        path: '',
      },
      {
        title: 'Calculations - Development Quantum',
        path: '',
      },
      {
        title: 'Calculations - Development Charge',
        path: 'https://www.ura.gov.sg/Corporate/Guidelines/Development-Control/Planning-Permission/Folder/DC-Charge-Rates/Example-Scenario-Calculating-DC',
      },
      {
        title: 'Calculations - Differential Premium',
        path: '',
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
      {
        title: 'Performance Based Approach to Fire Safety Design (July 2004)',
        path: 'https://www.scdf.gov.sg/home/fire-safety/plans-and-consultations/performance-based-approach-to-fire-safety-design',
      },
      {
        title: 'Circulars (2001 - Present)',
        path: '',
      },
      {
        title: 'Fire Engine Accessway (Refer to Chapter 4)',
        path: 'https://www.scdf.gov.sg/firecode/table-of-content/chapter-4---site-planning-external-firefighting-provision',
      },
      {
        title:
          'Unprotected Opening and Setback (Refer to Cl. 3.5.5 - Annex 3B)',
        path: 'https://www.scdf.gov.sg/firecode/table-of-content/chapter-3-structural-fire-precuations/clause-3.5',
      },
      {
        title: 'Occupant Load (Refer to Table 1.4B for OL Factors)',
        path: 'https://www.scdf.gov.sg/firecode/table-of-content/chapter-1-general/clause-1.4/#table14b',
      },
      {
        title:
          'Exit Capacity of Exit Facilities (Staircase, Corridors, Doors, Ramps) (Refer on Table 2.2A)',
        path: 'https://www.scdf.gov.sg/firecode/table-of-content/chapter-2-means-of-escape/clause-2.4/#table22a',
      },
      {
        title: 'AFA (Accessible Floor Area) (Refer to Cl. 1.4.1',
        path: 'https://www.scdf.gov.sg/firecode/table-of-content/chapter-1-general/clause-1.4',
      },
    ],
  },
  {
    header: 'NParks',
    content: [
      {
        title: 'Guidelines for Greenery Provision',
        path: 'https://www.nparks.gov.sg/-/media/nparks-real-content/partner-us/nparks-handbook-version-4.ashx',
      },
      {
        title: 'Greenery Provision within Premises (2019)',
        path: 'https://www.nparks.gov.sg/-/media/nparks-real-content/partner-us/nparks-handbook-version-4.ashx',
      },
      {
        title: 'Open Space for Landed Housing (2019)',
        path: '',
      },
      {
        title: 'Tree Conservation (2019)',
        path: '',
      },
      {
        title:
          'NParks Guidelines on Greenery Provision and Tree Conservation for Developments (2019)',
        path: '',
      },
      {
        title: 'Circulars (2011 - Present)',
        path: 'https://www.nparks.gov.sg/partner-us/development-plan-submission/circulars',
      },
    ],
  },
  {
    header: 'LTA',
    content: [
      {
        title: 'Code of Practice on Vehicular Parking (2019)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Vehicle_Parking_Proposals/COP_on_Vehicle_Parking_Provision_in_Development_Proposals-2019_Edition.pdf',
      },
      {
        title: 'Code of Practice on Street Works (2019)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/codes_of_practice/RT-COP_V2.0_April_2019.pdf',
      },
      {
        title: 'Code of Practice on Public Street Works (2018)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/public_streets/pdf/COP_for_Works_on_Public_Streets_Mar2022Ed.pdf',
      },
      {
        title: 'Code of Practice on Traffic Control Work Zone (2019)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/codes_of_practice/COP_Traffic_Control_at_Work_Zone_July_2019_Edition.pdf',
      },
      {
        title: 'Code of Practice on Railway Protection (2004)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Building_Works_Restricted_Activities_in_Railway_Protection_Zone/Codes_of_Practice_Standards_Specifications_Guides_Forms/Code_of_Practice_for_Railway_Protection.pdf',
      },
      {
        title: 'LTA Walking and Cycling Plan',
        path: 'https://www.lta.gov.sg/content/ltagov/en/industry_innovations/industry_matters/development_construction_resources/walking_cycling_plan.html',
      },
      {
        title: 'Guidelines for Transport Impact Assessment (2019)',
        path: 'https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Guidelines/TIA_Guidelines_WCP_Final_07Dec2018.pdf',
      },
      {
        title: 'Active Mobility',
        path: 'https://sso.agc.gov.sg/SL/AMA2017-S251-2018',
      },
      {
        title: 'Circulars (2007 - Present)',
        path: 'https://www.corenet.gov.sg/general/e-info/Circulars.aspx?agency=66110',
      },
      {
        title: 'Calculations - Car Parking Provisions',
        path: '',
      },
    ],
  },
  {
    header: 'PUB',
    content: [
      {
        title: 'Code of Practice on Sewerage and Sanitary Works (2019)',
        path: 'https://www.pub.gov.sg/Documents/COPSSW2nded2019AddendumNo1_final.pdf',
      },
      {
        title: 'Code of Practice on Surface Water Drainage (2018)',
        path: 'https://www.pub.gov.sg/Documents/COP_Surface%20Water%20Drainage_7th%20Ed%20Add.%201.pdf',
      },
      {
        title: 'Guidelines on ABC Water (2014)',
        path: 'https://www.pub.gov.sg/abcwaters/designguidelines',
      },
      {
        title: 'Technical Guide for On-site Stormwater Detention Tank Systems',
        path: 'https://www.pub.gov.sg/drainage/guidesandhandbooks',
      },
      {
        title: 'Circulars (2015 - Present)',
        path: 'https://www.pub.gov.sg/compliance/industry/circulars',
      },
    ],
  },
  {
    header: 'NEA',
    content: [
      {
        title: 'Code of Practice on Environmental Health (Sep 2021)',
        path: 'https://www.nea.gov.sg/docs/default-source/resource/practices-/copeh-2021.pdf',
      },
      {
        title: 'Code of Practice on Pollution Control (Feb 2009)',
        path: '',
      },
      {
        title:
          'Boundary Noise Limit for ACMV Systems in Non-industrial Buildings',
        path: 'https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/industrial-noise-control',
      },
      {
        title: 'Technical Guideline for Land Traffic Noise Impact Assessment',
        path: 'https://www.nea.gov.sg/docs/default-source/our-services/building-planning/technical-guideline-for-land-traffic-noise-impact-assessment.pdf',
      },
      {
        title: 'Circulars (2013 - Present)',
        path: 'https://www.nea.gov.sg/corporate-functions/resources/circulars/circulars',
      },
      {
        title: 'Calculations - Refuse Output',
        path: '',
      },
      {
        title: 'Calculations - Public Toilet Computation',
        path: '',
      },
    ],
  },
  {
    header: 'WSH',
    content: [
      {
        title: 'Workplace Safety and Health Act (Chapter 354A)',
        path: 'https://sso.agc.gov.sg/Act-Rev/354A/Published/20090731?DocDate=20090731',
      },
      {
        title: 'Code of Practice for Working Safely at Heights',
        path: 'https://www.tal.sg/wshc/-/media/tal/wshc/resources/publications/codes-of-practice/files/wsh-code-of-practice-2013_ebook.ashx',
      },
      {
        title: 'Code of Practice on Safe Lifting Operations in the Workplaces',
        path: 'https://www.tal.sg/wshc/-/media/tal/wshc/resources/publications/codes-of-practice/files/code_of_practice_safe_lifting_operations_revised_2014.ashx',
      },
      {
        title: 'Workplace Safety and Health Guidelines - Design for Safety',
        path: 'https://www.tal.sg/wshc/-/media/tal/wshc/resources/publications/wsh-guidelines/files/dfs.ashx',
      },
      {
        title: 'Design for Safety',
        path: '',
      },
      {
        title: 'Circulars (2013 - Present)',
        path: 'https://www.mom.gov.sg/workplace-safety-and-health/wsh-circulars',
      },
    ],
  },
];
