import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Member = ({
  ID_PK,
  studentID,
  name,
  first_track,
  second_track,
  git_hub,
  email,
}) => {
  const ICON_COLOR = git_hub ? 'black' : 'gray';
  const GITHUB_URL = git_hub;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{studentID}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{first_track}</span>
        <br />
        <span className="badge badge-ghost badge-sm">{second_track}</span>
      </td>
      <td>
        <AiFillGithub
          style={{ fontSize: '30px', color: ICON_COLOR }}
          onClick={() => {
            window.open(GITHUB_URL);
          }}
        />
      </td>
      <th>
        <div className="text-xs opacity-90">{email}</div>
      </th>
    </tr>
  );
};

export default Member;
