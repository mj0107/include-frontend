import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MemberList from '../components/MemberList/MemberList';
import StudentForm from '../components/StudentForm/StudentForm';

const MemberBoard = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/member/list')
      .then((res) => setMemberList(res.data));
  }, []);

  return (
    <>
      <MemberList memberList={memberList} />
      {/* <StudentForm memberList={memberList} /> */}
    </>
  );
};

export default MemberBoard;
