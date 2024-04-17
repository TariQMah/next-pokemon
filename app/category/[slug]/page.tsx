import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSpecificCategory } from "@/server/api/actions";
import ListPokemon from "@/Components/ListPokemon";
export default async function Category({ params }: any) {
  console.log("params: ", params.slug);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["types"],
    queryFn: () => getSpecificCategory(params.slug || ""),
  });
  return (
    <>
      <h1>All Pokemon Based on {params.slug}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListPokemon slug={params.slug} />
      </HydrationBoundary>
    </>
  );
}
