import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MemberList from '../components/MemberList/MemberList';
import StudentForm from '../components/StudentForm/StudentForm';

const MemberBoard = () => {
  const [memberList, setMemberList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const closeFormHandler = () => {
    setOpenForm(false);
  };
  const openFormHandler = () => {
    setOpenForm(true);
  };

  const deleteMemberHandler = (ID_PK) => {
    axios
      .delete(`http://localhost:8080/member/${ID_PK}`, {
        data: { idx: ID_PK },
      })
      .then((res) => {
        setMemberList(
          memberList.filter((member) => {
            return member.ID_PK !== ID_PK;
          })
        );
        console.log(`ID_PK: ${ID_PK} deleted`);
        console.log(res);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/member/list')
      .then((res) => setMemberList(res.data));
  }, []);

  return (
    <>
      <MemberList
        memberList={memberList}
        onDelete={deleteMemberHandler}
        onOpenForm={openFormHandler}
      />
      {openForm && <StudentForm onClose={closeFormHandler} />}
    </>
  );
};

export default MemberBoard;
