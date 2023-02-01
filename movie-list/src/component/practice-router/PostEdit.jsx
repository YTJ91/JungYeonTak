import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostEdit() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    let result = await axios.post("http://localhost:5000/post", {
      title: inputs.title,
      body: inputs.body,
    });

    navigate("/post/" + result.data.id);
  };

  return (
    <div>
      <h1>작성하기</h1>
      <div>
        <label>
          제목 :
          <input type="text" name="title" onChange={handleInputs} />
        </label>
      </div>
      <div>
        <label>
          내용 :
          <input type="text" name="body" onChange={handleInputs} />
        </label>
      </div>
      <button onClick={handleSubmit}>등록하기</button>
    </div>
  );
}

export default PostEdit;
