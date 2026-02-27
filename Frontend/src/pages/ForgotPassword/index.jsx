import { useState } from "react";
import PetName from "../../components/forgotP/PetName";
import Email from "../../components/forgotP/Email";

const index = () => {
  const [next, setNext] = useState({
    show: false,
    data: "",
  });
  console.log(">>>>>>>>>", next);
  return (
    <div>
      {next.show ? (
        <PetName next={next} setNext={setNext} />
      ) : (
        <Email next={next} setNext={setNext} />
      )}
    </div>
  );
};

export default index;
