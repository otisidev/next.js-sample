import Layout from "../../components/withLayout";
import Head from "next/head";

const Post = props => (
	<Layout>
		<Head>
			<title>{props.show.name}</title>
		</Head>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
		<img className="rounded mx-auto d-block" src={props.show.image.medium} />
		<button
			onClick={() => history.back()}
			type="button"
			className="btn btn-primary"
		>
			Back
		</button>
	</Layout>
);

Post.getInitialProps = async context => {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	return { show };
};
export default Post;
