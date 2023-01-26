import React from "react";

function UserList({ userList, handleToggle, handleRemove }) {
  return (
    <div>
      <ul>
        {/* 배열을 랜더링할 때 key 값에 고유한 값을 전달해야 한다. */}
        {userList.map((user) => (
          // 단축평가를 이용하여 user.active ture인 경우만 파란색 글씨.
          <li
            key={user.id}
            style={{ color: user.active && "blue" }}
            onClick={() => handleToggle(user.id)}
          >
            {user.name}({user.email})
            <button
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 전파를 막는다.
                handleRemove(user.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(UserList);
