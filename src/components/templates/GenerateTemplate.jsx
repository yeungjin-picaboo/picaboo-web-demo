import { useMutation } from "node_modules/@tanstack/react-query/build/lib/useMutation";
import Image from "node_modules/next/image";
import { useState } from "react";
import { createPictureFn } from "src/api/generateApi";
import styled from "styled-components";

export default function GenerateTemplate() {
  const [text, setText] = useState("");
  const { mutate, data } = useMutation(["createPictureFn"], createPictureFn);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(text);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      {!data && (
        <form onSubmit={handleSubmit}>
          <Textarea value={text} onChange={handleChange} />
          <Button>Create</Button>
        </form>
      )}
      {data && <Image src={data} alt="AI Picture" width={500} height={500} />}
    </>
  );
}

const Textarea = styled.textarea`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  resize: none;
  font-size: 1.8rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: 1px solid black;
  font-size: 1.8rem;
`;
