import React, {Component} from 'react';
import './App.css';
import routes from './routes.js';
import Contact from './Contact';
import YouTube from '../node_modules/react-youtube/dist/YouTube.js';
import createHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom';

const videoId = 'R-AGc24ZCeM';
const history = createHistory()
class App extends Component {
  constructor(props) {        
    super(props);

    this.state = {
      videoId: videoId,
      player: null,
    };

    this.onReady = this.onReady.bind(this);
 
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
    this.state.player.playVideo();
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {  
    this.state.player.pauseVideo();
  }

  onEnd(){
    ReactDOM.render(
      <Contact />,
      document.getElementById('root')
    );
  } 

   
  render() {
    return (
      <div  style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '150px'}}>
        <YouTube videoId={this.state.videoId} onReady={this.onReady} onEnd={this.onEnd}/>
      </div>
    );
  }
 
}

export default App;
