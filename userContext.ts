import { createContext } from "react";

type User = {
    name: string;
    age: number;
  }

  interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
  }

export const userContext = createContext<User | undefined>(undefined);
export const postContext = createContext< Post | undefined > (undefined)