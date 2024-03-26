"use client";

import { useFormState } from "react-dom";

async function increment(previousState: any, formData: any) {
  return previousState + 1;
}

const MyTest = () => {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <>
      <form action={formAction}>
        {state}
        <button>Increment</button>
      </form>
    </>
  );
};

export default MyTest;
