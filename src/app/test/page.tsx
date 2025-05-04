const unusedVar = 123; // এই লাইনে এরর আসবে

export const WrongComponent = () => {
  return <div>Test</div>;
};

export default function Home() {
  console.log("Test"); // এই লাইনে ওয়ার্নিং আসবে
  return <div>Home Page</div>;
}
