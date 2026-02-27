const CloseCard = (props) => {
  let btn = props.btn;
  let btn2 = props.fBtn;
  // let btn2 = props.fBtn;
  let func = props.fun;

  const handleClick = () => {
    func((prev) => ({ ...prev, [btn]: true, [btn2]: false }));
  };
  return (
    <div className="bg-black rounded-[20px] p-4 w-150">
      <div className="flex justify-between">
        <p>{props.head}</p>
        <button className="underline" onClick={handleClick}>
          EDIT
        </button>
      </div>
      <div className="flex justify-between">
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
      <div className="flex justify-between">
        <p>{props.title2}</p>
        <p>{props.info2}</p>
      </div>
    </div>
  );
};

export default CloseCard;
