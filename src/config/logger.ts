import { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

export const handleRequest = (
  config: InternalAxiosRequestConfig,
  logsEnabled?: boolean
) => {
  if (logsEnabled) {
    console.log(`[ Request Config ] ${config.method?.toUpperCase() ?? ""} | ${config.url ?? ""}`);
  }
  return config
};

export const handleRequestError = async (
  error: AxiosError<unknown>,
  logsEnabled?: boolean
): Promise<AxiosError<unknown>> => {
  if (logsEnabled) {
    console.error(`[ Request Error ] CODE ${error.code ?? "UNKNOWN"} | ${error.message}`);
  }
  return await Promise.reject(error);
};

export const handleResponse = (
  response: AxiosResponse,
  logsEnabled?: boolean
): AxiosResponse => {
  if (logsEnabled) {
    console.log(
      `[ Response ] STATUS ${response.status} | "NOT CACHED"}`
    );
  }
  return response;
};

export const handleResponseError = async (
  error: AxiosError<unknown>,
  logsEnabled?: boolean
): Promise<AxiosError<unknown>> => {
  if (logsEnabled) {
    console.error(`[ Response Error ] CODE ${error.code ?? "UNKNOWN"} | ${error.message}`);
  }
  return await Promise.reject(error);
};
