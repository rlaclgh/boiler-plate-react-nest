import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
const queryClient = new QueryClient();
const App = () => {
  console.log(11);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
};

export default App;
