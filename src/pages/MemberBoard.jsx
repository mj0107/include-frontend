import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MemberList from '../components/MemberList/MemberList';
import StudentForm from '../components/StudentForm/StudentForm';

const MemberBoard = () => {
  const [memberList, setMemberList] = useState([]);
  const [openCreateForm, setOpenCreateForm] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);

  const closeFormHandler = () => {
    setOpenCreateForm(false);
    setOpenUpdateForm(false);
  };
  const openCreateFormHandler = () => {
    setOpenCreateForm(true);
  };
  const openUpdateFormHandler = () => {
    setOpenUpdateForm(true);
  };

  // Create
  const createMemberHandler = (e, memberInfo) => {
    console.log('create: ', memberInfo);
    e.preventDefault();

    axios
      .post('http://localhost:8080/member/post', memberInfo)
      .then((res) => {
        console.log(res);
        const ID_PK = res.data.insertId;
        setMemberList([...memberList, {ID_PK: ID_PK, ...memberInfo}]);
      });
  };

  // Delete
  const deleteMemberHandler = (ID_PK) => {
    axios
      .delete(`http://localhost:8080/member/list?idx=${ID_PK}`, {
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

  // Read
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
        onOpenCreateForm={openCreateFormHandler}
        onOpenUpdateForm={openUpdateFormHandler}
      />
      {(openCreateForm || openUpdateForm) && (
        <StudentForm
          memberList={memberList}
          onCreate={createMemberHandler}
          onClose={closeFormHandler}
          isOpenCreateForm={openCreateForm}
          isOpenUpdateForm={openUpdateForm}
        />
      )}
    </>
  );
};

export default MemberBoard;
