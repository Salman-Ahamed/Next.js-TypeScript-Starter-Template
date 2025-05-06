import { NewPage } from "@/components/new-page";

type Props = { params: Promise<{ id: string }> };

const Blog = async ({ params }: Props) => {
  const id = (await params).id;
  return <NewPage title={`Blog ${id} Page`} />;
};

export default Blog;
