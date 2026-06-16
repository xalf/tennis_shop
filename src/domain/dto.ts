export type ApiResponse<T> = Promise<{
  isError: boolean;
  data?: T;
}>;
