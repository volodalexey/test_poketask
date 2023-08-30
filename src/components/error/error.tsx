import { type AxiosError } from "axios";

export const Error = ({ error }: { error: AxiosError<string> }) => (
  <pre>
    {JSON.stringify(error.toJSON(), undefined, 2)}
  </pre>
);
