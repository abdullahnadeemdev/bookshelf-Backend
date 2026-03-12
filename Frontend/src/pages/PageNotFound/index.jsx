import { useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";

const PageNotFound = (props) => {
  const navigate = useNavigate();
  console.log("props", props);
  console.log("propsprops", props.auth);

  const handleClick = () => {
    // console.log("props click", props.auth);
    if (props?.auth !== false) {
      <>{navigate("/", { replace: true })}</>;
    } else {
      <>{navigate("/login", { replace: true })}</>;
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-4xl text-bold text-red bg-blackC">
      {"Page Not Found"}
      <Button className="mt-10" onClick={handleClick}>
        Go Back
      </Button>
    </div>
  );
};

export default PageNotFound;
