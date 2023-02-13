import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";
import articlesObject from "../../JSON/dummy-data";

let articles = articlesObject;
let error = null;
let loading = false;

describe("basic rendering", () => {
  it("renders 10 article cards using dummy data", () => {
    render(<SearchResults data={articles} error={error} loading={loading} />);

    const articleCards = screen.getAllByRole("img");

    expect(articleCards.length).toEqual(10);
  });
  it("shows loading message when loading", () => {
    loading = true;
    render(<SearchResults data={articles} error={error} loading={loading} />);

    const loadingMessage = screen.getByText("Loading results ...");

    expect(loadingMessage).toBeVisible();
  });
});

describe("error handling", () => {
  it("shows request limit message with 403 error status", () => {
    error = { status: 403 };
    render(<SearchResults data={articles} error={error} loading={loading} />);

    const requestErrorMessageText =
      "Request limit reached on API free tier 😥 Try again tomorrow...";
    const generalErrorMessageText = "Oops something went wrong there.";
    const errorMessage = screen.getByText(requestErrorMessageText);

    expect(errorMessage).toBeVisible();
    expect(screen.queryByText(generalErrorMessageText)).toBeNull();
  });
  it("shows general error message for any other non 403 error", () => {
    error = { status: 404 };
    render(<SearchResults data={articles} error={error} loading={loading} />);

    const requestErrorMessageText =
      "Request limit reached on API free tier 😥 Try again tomorrow...";
    const generalErrorMessageText = "Oops something went wrong there.";

    const errorMessage = screen.getByText(generalErrorMessageText);

    expect(errorMessage).toBeVisible();
    expect(screen.queryByText(requestErrorMessageText)).toBeNull();
  });
  it("doesn't render results if error exists", () => {
    error = { status: 404 };
    render(<SearchResults data={articles} error={error} loading={loading} />);

    const articleResults = screen.queryAllByRole("img");

    expect(articleResults).toEqual([]);
  });
});
