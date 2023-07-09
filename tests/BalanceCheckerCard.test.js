import BalanceCheckerCard from "../src/components/BalanceCheckerCard";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

it('renders the Balance Checker Card', () => {
    render(<BalanceCheckerCard />);
});

