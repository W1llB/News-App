import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import moment from "moment";

const article = {
  title: "Eye Drops Are Recalled After Being Linked to Vision Loss and 1 Death",
  description:
    "The maker of EzriCare Artificial Tears said it was recalling the eye drops after U.S. health authorities linked the product to a drug-resistant bacteria strain.",
  content:
    "Dr. Thomas L. Steinemann, a spokesman for the American Academy of Ophthalmology, said that people did not need to be “too terribly concerned” about using other types of eye drops.\n“We use them for tears, we use them for antibiotics, we use them to tr... [1399 chars]",
  url: "https://www.nytimes.com/2023/02/02/business/eye-drops-ezricare-infections-cdc.html",
  image:
    "https://static01.nyt.com/images/2023/02/02/multimedia/02xp-eyedrops-ghwv/02xp-eyedrops-ghwv-facebookJumbo.jpg",
  publishedAt: "2023-02-02T21:07:20Z",
  source: {
    name: "The New York Times",
    url: "https://www.nytimes.com",
  },
};

const now = moment(article.publishedAt).fromNow();

describe("ArticleCard props render", () => {
  it("correct title, description, publisher rendered", () => {
    render(<ArticleCard article={article} />);
    const articleTitle = screen.getByRole("heading");
    expect(articleTitle).toHaveTextContent(article.title);

    // looks for exact match on description with dummy data
    screen.getByText(article.description);

    // looks for exact match on publisher with dummy data
    screen.getByText(article.source.name);
  });
  it("correct published at footer & image src", () => {
    render(<ArticleCard article={article} />);
    // checks published at matches dummy data date
    screen.getByText(now);

    const articleImage = screen.getByRole("img");
    expect(articleImage).toHaveAttribute("src", article.image);

    expect(articleImage).toHaveAttribute("alt", "article related.");
  });
});
