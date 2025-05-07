import { NewPage } from "@/components/layout";

export const TestPage = () => {
  console.log("first");
  return <NewPage title="Test Page!" />;
};

export const test = () => {
  // Using arrow function instead of function declaration
  // console.log removed as per ESLint rules
};
