import { useRouter } from "next/router";
import Layout from "../components/withLayout";

const Post = () => {
	const router = useRouter();

	return (
		<Layout>
			<h2>{router.query.title}</h2>
			<p>This is the blog post content.</p>
		</Layout>
	);
};

export default Post;
