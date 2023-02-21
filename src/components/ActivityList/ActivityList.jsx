import React from 'react';
import styled from 'styled-components';

import { useActivityStore } from '../../store/activityStore';
import Activity from './Activity';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16384c;
`;

const Container = styled.div`
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;

const ActivityList = () => {
  const activityList = useActivityStore((state) => state.activityList);

  return (
    <Wrapper>
      <Container>
        {activityList.map((activity) => {
          return <Activity key={activity.ID_PK} activityInfo={activity} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default ActivityList;
