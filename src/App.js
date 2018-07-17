import React, {Component} from 'react';
import styled from 'styled-components';

import requestPlayerStats from './services/requestPlayerStats';
import Players from './containers/Players';

/**
 * Change width here, to tests responsive css.
 */
const PlayerStatsResponsiveWrapper = styled.div`
  width: 50%;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.asyncRequest = requestPlayerStats()
      .then(response => {
        this.asyncRequest = null;
        this.setState({players: response.players})
      });
  }

  componentWillUnmount() {
    if(this.asyncRequest){
      this.asyncRequest.cancel();
    }
  }

  render() {
    return (
      <PlayerStatsResponsiveWrapper>
        <Players players={this.state.players}></Players>
      </PlayerStatsResponsiveWrapper>
    );
  }
}

export default App;
