import { NewPage } from "@/components/layout";

export const TestPage = () => {
  console.log("first");
  return <NewPage title="Test Page!" />;
};

export function test() {
  console.log("second");
}
