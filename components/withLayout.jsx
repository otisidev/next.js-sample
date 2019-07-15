import Head from "next/head";
import Header from "../pages/header";

const Layout = props => (
	<body>
		<Head>
			<link
				href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/united/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-WTtvlZJeRyCiKUtbQ88X1x9uHmKi0eHCbQ8irbzqSLkE0DpAZuixT5yFvgX0CjIu"
				crossOrigin="anonymous"
			/>
		</Head>
		<Header />

		<main role="main" className="container mt-4">
			{props.children}
		</main>
		<footer className="footer mt-auto py-3">
			<div className="container text-center">
				<span className="text-muted">Developed by otisidev</span>
			</div>
		</footer>
	</body>
);

export default Layout;
