import { useState } from "react";

function InputText() {
  // React의 훅은 컴포넌트 훅은 커스텀 훅에서만 사용 가능하다.
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });

  // 상태값 비구조화 할당.
  const { username, email } = inputs;

  //   ...  = 펼침 연산자
  const handleInput = (e) => {
    // e.target.name : input의 name 속성에 지정된 값
    console.log(e.target.name);
    // React의 상태는 불변성을(immutable) 지켜주어야한다.
    // 동적으로 프로퍼티 값을 할당 => ["키값"]
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // 요소를 저장하기 위해 생성

  const handleReset = () => {
    // 상태값 초기화
    setInputs({
      email: "",
      username: "",
    });
  };

  return (
    <div>
      <p>
        유저 : {username}({email})
      </p>
      <input
        type="text"
        onChange={handleInput}
        name="username"
        value={username}
      />
      <input type="text" onChange={handleInput} name="email" value={email} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default InputText;
