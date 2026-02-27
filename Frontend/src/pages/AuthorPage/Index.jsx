import { authorsArray } from "../../utils/utils";
import CardAuthor from "./CardAuthor";

const Index = () => {
  return (
    <div className="bg-blackC">
      <div
        className=" my-10 h-screen max-w-[1440px] px-0.5 mx-auto  "
        id="authors"
      >
        <h1 className="font-semibold text-4xl py-10 pl-6">POPULAR AUTHORS</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-5 md:pb-10 w-full gap-3 ">
          {authorsArray.map((item, index) => (
            <CardAuthor
              key={index}
              image={item.image}
              author={item.author}
              book={item.book}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
