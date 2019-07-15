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
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-primary">
							{this.props.show.language}
						</strong>
						<span className="d-inline-block mb-2">
							Type: {this.props.show.type}
						</span>
						<h1 className="mb-0">{this.props.show.name}</h1>
						<div className="mb-1 text-muted">{this.props.show.premiered}</div>

						<p
							className="card-text mb-auto"
							dangerouslySetInnerHTML={{ __html: this.props.show.summary }}
						/>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img
							className="bd-placeholder-img"
							width="200"
							height="250"
							src={this.props.show.image && this.props.show.image.medium}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Post;
