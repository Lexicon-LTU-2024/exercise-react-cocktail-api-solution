import { useLoaderData } from "react-router-dom";

export function useTypedLoaderData<T>(): T {
  return useLoaderData() as T;
}
