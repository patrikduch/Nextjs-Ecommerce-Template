import React from 'react';
import { NextPage } from 'next';
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';
import { wrapper } from '@redux/store';
import { getProjectDetail } from '@redux/actions/project-detail';
import StoreTypeObj from '@typescript/types/shared/redux/thunk/Store-Type';
import CommodityListingContainer from '@components/public/home-page/commodities/Commodity-Listing-Container';
/**
 * @function Homepage Page component for root path.
 * @return JSX markup that consists all components for the Homepage.
 */
const Homepage: NextPage = () => {
  return (
    <MainContainer>
      <CommodityListingContainer />
    </MainContainer>
  );
};

/**
 * @function getServerSideProps SSR preprocessing of Userpage component.
 */
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { store } = context;
    await (store as StoreTypeObj).dispatch(getProjectDetail());

    return {
      props: {
        projectDetail: (store.getState()).projectDetail
      }
    };
  }
);

export default Homepage;
