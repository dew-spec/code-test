import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { PrimaryButton, Spinner } from "../../components";
import { useFetchPointOfInterest } from "../../hooks/useFetchPointOfInterest";

interface MatchParams {
  id: string;
}

const PointOfInterest: React.FC = () => {
  const history = useHistory();
  let { id } = useParams<MatchParams>();
  const { result: location, loading, error } = useFetchPointOfInterest(id);

  if (loading && !location) {
    return <Spinner data-testid="point-of-interest-loading-spinner" />;
  }

  if (error || !location) {
    return <h2>There's been an error</h2>;
  }

  let previousPage = () => {
    history.goBack();
  };

  return (
    <div data-testid="point-of-interest-page">
      <PrimaryButton onClick={previousPage}>Previous Page</PrimaryButton>
      <h1>{location.name}</h1>
      <LoadScript googleMapsApiKey="AIzaSyDua-rtluNptzcRA7l-M8q1IRsrvaGy0hI">
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "400px" }}
          center={{ lat: location.latitude, lng: location.longitude }}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PointOfInterest;
