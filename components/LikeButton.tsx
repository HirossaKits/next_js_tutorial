import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "../components/atom";

const LikeButton = () => {
  const [count, setCount] = useRecoilState(countState);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <span onClick={handleClick}>💗Like {count}&nbsp;</span>
      <style jsx>{`
        span {
          cursor: pointer;
          border: solid 1px;
          border-radius: 5px;
          padding: 3px;
        }
      `}</style>
    </>
  );
};

export default LikeButton;
