import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSpecificCategory } from "@/server/api/actions";
import ListTypes from "@/components/ListTypes";
export default async function Category({ params }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["types"],
    queryFn: () => getSpecificCategory(params.slug || ""),
  });
  return (
    <>
      <h1>All Pokemon Based on category: {params.slug}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListTypes type="types" slug={params.slug} />
      </HydrationBoundary>
    </>
  );
}
