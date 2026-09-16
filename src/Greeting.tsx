// Code 01: Greeting.tsx

import React from 'react';

// Step 1: Define an interface for the component's props.
// "name" is a required string.
interface GreetingProps {
  name: string;
}

// Step 2: Type the functional component using the props interface.
// Using React.FC<GreetingProps> gives the component proper typing.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return JSX as before — TypeScript infers the return type.
  return <div>Hello, {name}!</div>;
};

export default Greeting;