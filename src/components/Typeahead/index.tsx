import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { PointOfInterest } from "../../typings";
import { Input, Label, Menu, MenuItem } from "../index";

interface TypeAheadProps {
  onMenuSelect: (e: PointOfInterest) => void;
  apiUrl: string;
}

const Typeahead: React.FC<TypeAheadProps> = ({ onMenuSelect, apiUrl }) => {
  let [searchParam, setSearchParam] = useState<string>("");
  let [errorStatus, setErrorStatus] = useState<boolean>(false);
  let [locationResults, setLocationResults] = useState<PointOfInterest[]>([]);

  let queryLocations = async (searchParam: string) => {
    try {
      let response: AxiosResponse<PointOfInterest[]> = await axios.get(
        `${apiUrl}?q=${searchParam}`
      );
      setLocationResults(response.data);
    } catch (error) {
      setErrorStatus(true);
    }
  };

  let onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorStatus(false);
    setSearchParam(e.target.value);
    queryLocations(e.target.value);
  };

  let renderMenuItems = (locationResults: PointOfInterest[]) => {
    if (!locationResults.length && searchParam.length) {
      return <MenuItem>No Results</MenuItem>;
    }
    return locationResults.map((pointOfInterest: PointOfInterest) => (
      <MenuItem
        key={pointOfInterest.id}
        onSelect={() => onMenuItemSelect(pointOfInterest)}
      >
        {pointOfInterest.name}
      </MenuItem>
    ));
  };

  let onMenuItemSelect = (pointOfInterest: PointOfInterest) => {
    setSearchParam(pointOfInterest.name);
    onMenuSelect(pointOfInterest);
  };

  return (
    <>
      <Label name="Explore your next city" error={errorStatus} />
      <Input
        error={errorStatus}
        name="typeahead"
        value={searchParam}
        onChange={onInputChange}
        placeholder="search by location"
      />
      <Menu hide={errorStatus}>{renderMenuItems(locationResults)}</Menu>
    </>
  );
};

export default Typeahead;
