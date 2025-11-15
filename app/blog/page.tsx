 
import  Button from './_components/Button'
import { Suspense } from "react";
import Testing from "./_components/Testing";
import FetchProjects from '../home/_components/FetchProjects';
export default function Page() {
  return (
    <div>
      <h1>Blog Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Testing />
      </Suspense>
       <Suspense fallback={<div>Loading...</div>}>
        <FetchProjects />
      </Suspense>
      <Button />
    </div>
  );
}


