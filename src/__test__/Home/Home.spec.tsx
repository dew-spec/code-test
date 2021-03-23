import App from "../../App";
import axios from "axios";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
let API_URL = "https://code-challenge-backend.herokuapp.com/locations";
jest.mock("axios");

test("User can search for a point of interest and is directed to that page id", async () => {
  // Mock App
  const app = (
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const resp = {
    data: [
      { name: "Cardiff", id: 2 },
      { name: "Cardigan", id: 7 },
    ],
  };
  mockedAxios.get.mockResolvedValue(resp);

  let { getByTestId, getAllByTestId } = render(app);

  let typeaheadInput = getByTestId("input");
  fireEvent.change(typeaheadInput, { target: { value: "Cardiff" } });

  await waitFor(() => {
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(`${API_URL}?q=Cardiff`);
  });

  let firstMenuItem = getAllByTestId("menu-item")[0];
  fireEvent.click(firstMenuItem);

  await waitFor(() => {
    expect(
      getByTestId("point-of-interest-loading-spinner")
    ).toBeInTheDocument();
  });
});
