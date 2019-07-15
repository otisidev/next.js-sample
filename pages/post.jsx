import Layout from "../components/withLayout";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

class Post extends React.Component {
	static async getInitialProps(context) {
		const { id } = context.query;
		const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
		const show = await res.json();

		return { show };
	}
	render() {
		return (
			<Layout>
				<Head>
					<title>{this.props.show.name}</title>
				</Head>
				<div className="text-right">
					<button
						onClick={() => history.back()}
						type="button"
						className="btn btn-primary"
					>
						Back
					</button>
				</div>
				<h1>{this.props.show.name}</h1>
				<p>{this.props.show.summary}</p>
				{/* <img
					className="rounded mx-auto d-block"
					src={this.props.show && this.props.show.image.medium}
				/> */}
			</Layout>
		);
	}
}

export default Post;
