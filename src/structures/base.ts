import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import {
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
} from "../config/logger";
import { BASE_URL } from "../constants";
import { ENDPOINTS } from "../constants";

type ObjectValue<T> = T[keyof T];
type Endpoint = ObjectValue<typeof ENDPOINTS>;

/**
 * ## Client Args
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
  /**
   * ## Enable logs
   */
  logs?: boolean;
}

/**
 * ### Base Client
 */
export class BaseClient {
  protected api: AxiosInstance;

  constructor(clientOptions?: ClientArgs) {
    this.api = axios.create({
      baseURL: BASE_URL.REST,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => handleRequest(config, clientOptions?.logs),
      (error: AxiosError<string>) => handleRequestError(error, clientOptions?.logs),
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => handleResponse(response, clientOptions?.logs),
      (error: AxiosError<string>) => handleResponseError(error, clientOptions?.logs),
    );
  }

  protected getListURL(endpoint: Endpoint, offset?: number, limit?: number): string {
    return `${endpoint}?offset=${offset ?? 0}&limit=${limit ?? 20}`;
  }
}
