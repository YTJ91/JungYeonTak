import { useState } from "react";
import styled from "styled-components";
import { createPost } from "../../api/auth";
import Button from "./Button";
import ImageCrop from "./ImageCrop";

function PostEdit() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({
    url: "",
    filename: "",
  });
  const [body, setBody] = useState("");
  // 자른 파일을 받아서 url, filename 업데이트

  const handleCrop = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: e.target.files[0].name,
      });
      setOpen(true);
    };
  };

  const handleImage = (file) => {
    setFile(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: file.name,
      });
      setOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    const form = new FormData();

    form.append("files", file);
    form.append("body", body);

    const data = await createPost(form);
  };

  return (
    <>
      <Container>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="image"
          onChange={handleCrop}
        />
        <PreviewBox htmlFor="image">
          <img src={image.url} alt="" />
        </PreviewBox>
        <Inputbody onChange={(e) => setBody(e.target.value)} />
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
      {open && (
        <ImageCrop
          closeModal={() => setOpen(false)}
          originalUrl={image.url}
          onSubmit={handleImage}
          filename={image.filename}
        />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PreviewBox = styled.label`
  width: 200px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.bd_color};
  margin-bottom: 20px;
  cursor: pointer;
`;

const Inputbody = styled.textarea`
  resize: none;
  width: 200px;
  margin-bottom: 10px;
`;

export default PostEdit;
