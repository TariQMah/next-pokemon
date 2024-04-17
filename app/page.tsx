import { StyledBox } from "@/StyledComponent/Box";
import { StyledGrid } from "@/StyledComponent/Grid";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategories } from "@/server/api/actions";
import ListCategories from "@/Components/ListCategories";
export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <>
      <h1>All Categories</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListCategories />
      </HydrationBoundary>
    </>
  );
}
