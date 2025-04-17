import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a Post
interface Post {
  id: number | null;
  userId: number | null;
  title: string | null;
  body: string | null;
}

// Define the type for context
interface PostContextType {
  user: Post;
  setUser: React.Dispatch<React.SetStateAction<Post>>;
}

// Create context with an explicit default value
const PostContext = createContext<PostContextType | undefined>(undefined);

// Define props type for the provider component
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<Post>({
    id: null,
    userId: null,
    title: null,
    body: null
  });

  return (
    <PostContext.Provider value={{ user, setUser }}>
      {children}
    </PostContext.Provider>
  );
};


// export const useContextHooks = () => {
//     return useContext(PostContext)
// }

// Custom hook to use the context safely
export const useContextHooks = (): PostContextType => {
    const context = useContext(PostContext);
    if (!context) {
      throw new Error("useContextHooks must be used within a ContextProvider");
    }
    return context;
  };