import Link from "next/link";
const PostLink = props => (
	<li
		key={props.show.id}
		className="list-group-item d-flex justify-content-between align-items-center"
	>
		<Link href="/p/[id]" as={`/p/${props.show.id}`}>
			<a>{props.show.name}</a>
		</Link>
		<span className="badge badge-primary badge-pill">
			{props.show.rating.average}
		</span>
	</li>
);

export default PostLink;
