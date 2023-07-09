import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { render, getByText, getByTitle } from "@testing-library/react";

test('renders the home page', () => {
    render(<Home />);
});