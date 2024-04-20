import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPokemon } from "@/server/api/actions";
import DetailsPokemon from "@/components/DetailsPokemon";
import { MainHeading } from "@/styledComponent/Globals";
export default async function Category({ params }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getPokemons"],
    queryFn: () => getPokemon(params.slug || ""),
  });
  return (
    <>
      <MainHeading>Pokemon Based on name {params.slug}</MainHeading>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailsPokemon slug={params.slug} />
      </HydrationBoundary>
    </>
  );
}
