import { memo } from "react";
import styled from "styled-components";

const Input = styled.input`
  flex-grow: 1;
  font-size: 1.1rem;
  margin: 0 1.2rem;
  padding: 0.2rem 0;
  line-height: 1.7rem;
  letter-spacing: 1px;

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

function QuesInput({ ques = "", setQuesInfo }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuesInfo((prev) => ({ ...prev, question: e.target.value }));
  };
  return (
    <Input
      placeholder="Enter a question title"
      value={ques}
      onChange={handleChange}
    />
  );
}

export default memo(QuesInput);