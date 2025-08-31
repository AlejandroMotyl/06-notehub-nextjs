import { QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import AppClient from "./page.client";
import { fetchNotes } from "@/lib/api/api";

export default  async function App() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, ''], 
    queryFn: () => fetchNotes('', 1),
  })

  return (
   <HydrationBoundary state={dehydrate(queryClient)}>
      <AppClient />
    </HydrationBoundary>
  );
}