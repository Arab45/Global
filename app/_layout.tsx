import { Stack } from "expo-router";
import { useState } from "react";
import { userContext } from "@/userContext";
import { postContext } from "@/userContext";
import { fetchAllPlaces } from "@/services/place-service";
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";
import { ContextProvider } from "@/contextProvider";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {



  return (
    <>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="productScreen" options={{ headerShown: false}} />
            {/* <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="query" options={{ headerShown: false }} /> */}
          </Stack>
        </QueryClientProvider>
      </ContextProvider>
    </>
  );
}
