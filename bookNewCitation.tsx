class bookNewCitation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authorFirstName: "Nick",
			authorLastName: "Jans",
			title: "The Last Light Breaking: Life among Alaska's Inupiat Eskimos",
			publisher: "Alaska Northwest Books",
			yearPublished: 1993

		}
	}

	

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	render() {
		
	}
}

bookNewCitation.defaultProps = {
	citationType: 'book'
}

ReactDOM.render(
	return <bookNewCitation />, document.getElementById('bookNewCitation');
);