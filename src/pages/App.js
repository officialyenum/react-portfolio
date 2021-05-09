import React, { Component } from 'react';
import Projects from '../components/Projects';
import SocialProfiles from '../components/SocialProfiles';
import profile from "../assets/profile.png"; 
import Title from "../components/Title";

class App extends Component {
    state = { displayBio: false };
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('Component this', this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    toggleDisplayBio = () => {
        // console.log('readMore this', this);
        this.setState({displayBio:!this.state.displayBio})
    }
    render() {
        console.log('hi');
        return (
            <div>
                <img src={profile} alt="profile" className='profile'></img>
                <h1>Hello !</h1>
                <p>My Name is Yenum, <Title/> </p>
                <p>I'm the littest thing after agege bread</p>
                {this.state.displayBio ? (
                    <div>
                            <p>I live in Lagos, and code everyday</p>
                            <p>My favorite language is javascript</p>
                            <p>Besides coding, I also love watching football</p>
                            <button onClick={this.toggleDisplayBio}>Read Less</button> 
                    </div>
                ): <div>
                    <button type={'button'} className={'btn btn-success rounded'} onClick={this.toggleDisplayBio}>Read more</button>
                </div> 
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }

}


export default App;