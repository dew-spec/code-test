import { renderWithTheme } from "../../__test__/utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import TypeaheadComp from "./index";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
let menuItemClick = jest.fn();

let API_URL = "https://code-challenge-backend.herokuapp.com/locations";

afterEach(() => {
  mockedAxios.get.mockClear();
});

describe("Typeahead", () => {
  it("renders correctly", async () => {
    renderWithTheme(
      <TypeaheadComp apiUrl={API_URL} onMenuSelect={menuItemClick} />
    );

    const resp = {
      data: [
        { name: "Cardiff", id: 2 },
        { name: "Cardigan", id: 7 },
      ],
    };

    mockedAxios.get.mockResolvedValue(resp);

    let Input = screen.getByTestId("input");
    fireEvent.change(Input, { target: { value: "Cardiff" } });

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
      expect(mockedAxios.get).toHaveBeenCalledWith(`${API_URL}?q=Cardiff`);
    });

    let MenuItems = screen.getAllByTestId("menu-item");
    expect(MenuItems.length).toBe(2);
    let firstMenuItem = screen.getAllByTestId("menu-item")[0];
    
    fireEvent.click(firstMenuItem);
    expect(menuItemClick).toHaveBeenCalled();
    expect(menuItemClick).toHaveBeenCalledWith({ id: 2, name: "Cardiff" });
  });
});
