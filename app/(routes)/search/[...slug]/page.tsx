import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SearchPokemon from "@/components/SearchPokemon";
export default async function Search({ params }: any) {
  const queryClient = new QueryClient();

  return (
    <>
      <h1>All Pokemon Based on category: {params.slug}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchPokemon params={params} />
      </HydrationBoundary>
    </>
  );
}
