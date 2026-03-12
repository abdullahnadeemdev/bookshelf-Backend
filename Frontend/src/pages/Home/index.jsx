import BestSellers from "../../components/home/bestSellers/BestSellers";
import CallToAction from "../../components/home/callToAction/CallToAction";
import Hero from "../../components/home/hero/Hero";
import PopularAuthor from "../../components/home/popularAuthor/PopularAuthor";
import Recommendation from "../../components/home/recommendSection/Recommendation";

const Index = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center ">
        <Hero />
      </div>
      <div
        className="flex items-center justify-center bg-blackC"
        id="bestSellers"
      >
        <BestSellers />
      </div>
      <div className="py-6 px-5.5">
        <CallToAction />
      </div>

      <div className="bg-blackC " id="authors">
        <PopularAuthor />
      </div>

      <div className="py-6 px-5" id="recommend">
        <Recommendation />
      </div>
    </div>
  );
};

export default Index;
