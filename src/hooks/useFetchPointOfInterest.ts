import { useEffect, useState } from "react";
import axios from "axios";
import { Location } from "../typings/pointsOfInterest";

let API_URL = process.env.REACT_APP_URL;

export const useFetchPointOfInterest = (id: string) => {
  const [result, setResult] = useState<Location>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => response.data)
      .then((response) => {
        setResult(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return {
    result,
    loading,
    error,
  };
};