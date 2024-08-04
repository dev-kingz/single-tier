import React from 'react'
import TitleHeader from "@/components/headers/title-header";
import Introduction from "./sections/introduction";
import SectionHeader from '@/components/headers/section-header';
import Subtitle from '@/components/headers/section-header/subtitle';
import {FcLandscape} from "react-icons/fc";
import Cookies from './sections/cookies';
import License from './sections/license';
import Hyperlinking from './sections/hyperlinking';
import IFrames from './sections/iFrames';

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TitleHeader
        title="Terms and Conditions"
        subTitle="Our terms and conditions!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Terms and Conditions", currentPage: true},
        ]}
      />
      <Introduction/>
      <Cookies/>
      <License/>
      <Hyperlinking/>
      <IFrames/>
    </main>
  );
};

export default TermsAndConditionsPage;
