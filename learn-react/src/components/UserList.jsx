import { useState } from "react";

const initalState = [
  { id: 1, name: "hbs93121", email: "hbs9312@gmail.com" },
  { id: 2, name: "hsadlk23412", email: "test93@gmail.com" },
  { id: 3, name: "test_user", email: "cocacola@gmail.com" },
];

function UserList() {
  const [userList, setUserList] = useState(initalState);
  return (
    <div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <ul>
        {userList.map((user) => (
          <li>
            {user.name}({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
