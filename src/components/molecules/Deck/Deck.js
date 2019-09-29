import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import theme from 'theme/mainTheme.js';
import Button from 'components/atoms/Button/Button';

const StyledDeck = styled.div`
  min-height: 100px;
  min-width: 200px;
  height: 100%;
  width: 100%;
  background-color: ${theme.darkTheme.mainDark};
  color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 1px 1px 10px #222222;
`;
const InnerWrapper = styled.div`
  padding: 10px;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0;
`;
const StyledButton = styled(Button)`
  margin-left: 65%;
`;
const StyledProperty = styled.span`
  font-weight: bold;
  color: ${theme.darkTheme.light};
`;
const StyledHeader = styled.h2`
  width: 100%;
  background-color: ${theme.darkTheme.light2};
  padding: 5px 10px;
  ::first-letter {
    text-transform: uppercase;
  }
`;

class Deck extends Component {
  state = {
    redirect: false,
  };

  handleDeckClick = () => this.setState({ redirect: true });

  render() {
    const { id, name, cards, trials, lastTry } = this.props;
    if (this.state.redirect) {
      return <Redirect to={`decks/${id}`} />;
    } else {
      return (
        <StyledDeck>
          <StyledHeader>{name}</StyledHeader>
          <InnerWrapper>
            <StyledStats>
              <span>
                <StyledProperty>Cards</StyledProperty>: {cards}
              </span>

              <span>
                <StyledProperty>Trials:</StyledProperty> {trials}
              </span>

              <span>
                <StyledProperty>Last try: </StyledProperty>
                {lastTry}
              </span>
            </StyledStats>
            <StyledButton width="35%" onClick={this.handleDeckClick}>
              Start
            </StyledButton>
          </InnerWrapper>
        </StyledDeck>
      );
    }
  }
}
export default Deck;
