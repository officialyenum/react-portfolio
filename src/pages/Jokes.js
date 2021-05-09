import React, {Component} from 'react';


const Joke = ({joke:{setup, punchline }}) => {
    return (
        <div>
            <p style={{margin:20}}>{setup} <em>{punchline}</em></p>
        </div>
    )
}

class Jokes extends Component {
    state = { joke:{}, jokes: []};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke:json}))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({jokes:json}))
            .catch(error => alert(error.message));
    }

    render() {
        const {setup, punchline } = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
                <hr/>
                <h3>Want ten new jokes ? </h3>
                <button type={'button'} className={'btn btn-success rounded'} onClick={this.fetchJokes}>Click me?</button>
                {
                    this.state.jokes.length > 0 
                        ?
                        this.state.jokes.map(JOKE => (
                            <Joke key={JOKE.id} joke={JOKE}/>
                        ))
                        : 
                        null
                }
            </div>
        )
    };
}

export default Jokes;