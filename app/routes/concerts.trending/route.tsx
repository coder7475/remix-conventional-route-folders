import Card from "./Components/Card";
import Sponsored from "./Components/Sponsored";

const Trending = () => {
  return (
    <div>
      Trending under concerts
      <div className="flex gap-2">
        <Card />
        <Card />
        <Card />
      </div>
      <Sponsored />
    </div>
  );
};

export default Trending;
