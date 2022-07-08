import React from 'react';
import './HobbyList.css';

class HobbyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbies: [],
            selectedHobby: null,
        };
    }

    componentDidMount() {
        console.log('Component didMount');
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    hobbies: Object.values(res),
                });
                console.log(this.state);
            });
    }

    onHobbyClick(e) {
        this.setState({ selectedHobby: e.target.textContent });
    }

    render() {
        return (
            <ul>
                {this.state.hobbies.map((e) => (
                    <li key={e._id} onClick={this.onHobbyClick.bind(this)} className={e.name === this.state.selectedHobby ? 'selected-hobby' : ''}>
                        {e.name}
                    </li>
                ))}
                <li>{this.props.hobby}</li>
            </ul>
        );
    }
}

export default HobbyList;
