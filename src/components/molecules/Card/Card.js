import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import theme from 'theme/mainTheme';
import IconButton from 'components/atoms/IconButton/IconButton';
import yesicon from 'assets/icons/yesicon.svg';
import wrongicon from 'assets/icons/wrongicon.svg';

const StyledWrapper = styled.div`
  height: 280px;
  width: 300px;
  position: relative;
  color: ${theme.darkTheme.light};
  @media (max-width: 320px) {
    height: 200px;
    width: 250px;
  }
`;
const box = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 2px 10px 30px -10px hsla(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const Back = styled(box)`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 1fr 15%;
  transform: rotateY(180deg) perspective(20vh);
  background-color: ${theme.darkTheme.deepDark};

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(0deg) perspective(20vh);
    `}
`;
const Front = styled(box)`
  transform: rotateY(0) perspective(20vh);
  background-color: ${theme.darkTheme.deepDark};

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(180deg) perspective(20vh);
    `}
`;
const StyledText = styled.span`
  grid-column: 2/3;
  grid-row: 1/3;
  padding: 5%;
  height: 100%;
  width: 100%;
`;
const StyledIconButton = styled(IconButton)`
  max-width: 100%;
  max-height: 100%;
  grid-row: 2/3;
`;
class Card extends Component {
  state = {
    flipped: false,
    clicked: false,
  };
  handleFlip = () => {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true,
    });
  };
  render() {
    const { front, back } = this.props;
    return (
      <StyledWrapper onClick={this.handleFlip}>
        <Front flipped={this.state.flipped}>{front}</Front>
        <Back flipped={this.state.flipped}>
          <StyledText>{back}</StyledText>
          <StyledIconButton icon={yesicon} />
          <StyledIconButton icon={wrongicon} />
        </Back>
      </StyledWrapper>
    );
  }
}

export default Card;
