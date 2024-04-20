import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPokemonByMove, getSpecificCategory } from "@/server/api/actions";
import ListTypes from "@/components/ListTypes";
export default async function Category({ params }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["move"],
    queryFn: () => getPokemonByMove(params.slug || ""),
  });
  return (
    <>
      <h1>All Pokemon Based on move: {params.slug}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListTypes type={"move"} slug={params.slug} />
      </HydrationBoundary>
    </>
  );
}
