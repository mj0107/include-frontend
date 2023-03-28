import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Member from './Member';

const MemberBoard = () => {
  const [memberList, setMemberList] = useState([]);
  const [isGraduate, setIsGraduate] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/member/list`)
      .then((res) => {
        let allMemberList = res.data;
        setMemberList(allMemberList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setStudentHandler = () => {
    setIsGraduate(0);
  };
  const setGraduateHandler = () => {
    setIsGraduate(1);
  };

  return (
    <>
      <div className="flex">
        <label className="label cursor-pointer">
          <span className="label-text">재학생</span>
          <input
            type="radio"
            name="isGraduate"
            className="radio"
            onChange={setStudentHandler}
            checked
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">졸업생</span>
          <input
            type="radio"
            name="isGraduate"
            className="radio"
            onChange={setGraduateHandler}
          />
        </label>
      </div>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Track</th>
            <th>GitHub</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {memberList
            .filter((member) => member.graduation === isGraduate)
            .map((member) => {
              return (
                <Member
                  key={member.ID_PK}
                  ID_PK={member.ID_PK}
                  studentID={member.studentID}
                  name={member.name}
                  first_track={member.first_track}
                  second_track={member.second_track}
                  git_hub={member.git_hub}
                  email={member.email}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default MemberBoard;
