import React, {Component} from 'react';
import styled from 'styled-components';

import requestPlayerStats from './services/requestPlayerStats';
import PlayerStats from './containers/PlayerStats';

/**
 * Change width here, to tests responsive css.
 */
const PlayerStatsResponsiveWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    requestPlayerStats()
      .then(response => {
        this.setState({players: response.players})
      });
  }

  render() {
    return (
      <PlayerStatsResponsiveWrapper>
        <PlayerStats players={this.state.players}></PlayerStats>
      </PlayerStatsResponsiveWrapper>
    );
  }
}

export default App;
