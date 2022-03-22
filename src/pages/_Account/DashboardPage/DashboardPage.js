import React from 'react';
import DataInfoCard from '../../../components/DataInfoCard/DataInfoCard';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './DashboardPage.scss';

function DashboardPage() {
  return (
    <div id="dashboard-page">
      <LayoutAccount
        title={'Dashboard'}
        subtitle={'Lorem ipsum dolor sit amet, consectetur'}
        background={false}
      >
        <div className="dashboard-container">
          <section className="grid-data-cards">
            <DataInfoCard
              title={'Total Sales'}
              data={'$10,800'}
              resume={'$50 New Sales'}
              icon={'icon'}
            />
            <DataInfoCard
              title={'Total Sales'}
              data={'$10,800'}
              resume={'$50 New Sales'}
              icon={'icon'}
            />{' '}
            <DataInfoCard
              title={'Total Sales'}
              data={'$10,800'}
              resume={'$50 New Sales'}
              icon={'icon'}
            />{' '}
            <DataInfoCard
              title={'Total Sales'}
              data={'$10,800'}
              resume={'$50 New Sales'}
              icon={'icon'}
            />
          </section>
          <section>table</section>
        </div>
      </LayoutAccount>
    </div>
  );
}

export default DashboardPage;
