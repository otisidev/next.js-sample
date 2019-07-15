import Layout from "../components/withLayout";
import Head from "next/head";
import PostLink from "./postlink";

class Index extends React.Component {
	static async getInitialProps() {
		const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
		const data = await res.json();
		return {
			shows: data.map(entry => entry.show)
		};
	}
	render() {
		return (
			<Layout>
				<Head>
					<title>Blog List</title>
				</Head>
				<h1>Blog List</h1>
				<ul className="list-group">
					{this.props.shows.map(show => (
						<PostLink key={show.id} show={show} />
					))}
				</ul>
			</Layout>
		);
	}
}

export default Index;
