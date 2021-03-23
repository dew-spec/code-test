import { Typeahead } from "../../components";
import { useHistory } from "react-router-dom";
import { PointOfInterest } from "../../typings";

let API_URL = process.env.REACT_APP_URL;

const Home: React.FC = () => {
  const history = useHistory();

  let menuItemSelect = (e: PointOfInterest) => {
    history.push(`/location/${e.id}`);
  };

  return <Typeahead apiUrl={API_URL} onMenuSelect={menuItemSelect} />;
};

export default Home;
