import { type SerializedError } from "@reduxjs/toolkit";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const Error = ({ error }: { error: FetchBaseQueryError | SerializedError }) => (
  <pre>
    {JSON.stringify(error, undefined, 2)}
  </pre>
);
