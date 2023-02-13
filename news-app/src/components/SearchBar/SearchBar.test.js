import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

// setup function
function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe("SearchBar tests", () => {
  it("Dropdown and text input render with correct labels & placeholders", () => {
    render(<SearchBar />);
    const dropdownInput = screen.getByRole("combobox");
    const textInput = screen.getByRole("textbox");

    expect(dropdownInput).toHaveValue("Category");
    expect(textInput).toHaveValue("");
    expect(textInput).toHaveAttribute(
      "placeholder",
      "Search for the latest news"
    );
  });
  it("user inputs for text & prop function called with correct param", async () => {
    const getCustomNews = jest.fn();
    const { user } = setup(<SearchBar getCustomNews={getCustomNews} />);
    const textInput = screen.getByRole("textbox");
    const searchButton = screen.getByText("Search");

    await user.type(textInput, "tennis");
    await user.click(searchButton);

    expect(textInput).toHaveValue("tennis");
    expect(getCustomNews).toHaveBeenCalledWith("tennis");
  });
  it("user selects category & prop function called with correct param", async () => {
    const searchByCategory = jest.fn();
    const { user } = setup(<SearchBar searchByCategory={searchByCategory} />);
    const dropdownInput = screen.getByRole("combobox");

    await user.selectOptions(dropdownInput, "technology");

    expect(dropdownInput).toHaveValue("technology");
    expect(searchByCategory).toHaveBeenCalledWith("technology");
  });
  it("user resets search bar & prop function called with correct param", async () => {
    const resetSearchResults = jest.fn();
    const { user } = setup(
      <SearchBar resetSearchResults={resetSearchResults} />
    );
    const resetButton = screen.getByText("Reset");

    await user.click(resetButton);

    expect(resetSearchResults).toHaveBeenCalled();
  });
});
