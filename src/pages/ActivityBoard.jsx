import React, { useEffect } from 'react';

import { useActivityStore } from '../store/activityStore';
import ActivityList from '../components/ActivityList/ActivityList';

const ActivityBoard = () => {
  const fetchActivityList = useActivityStore((state) => state.fetchActivityList);

  // Read
  useEffect(() => {
    fetchActivityList();
  }, []);

  return (
    <>
      <ActivityList />
    </>
  )
}

export default ActivityBoard;