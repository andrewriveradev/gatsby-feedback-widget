import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const animA = keyframes`
  from  {
    transform: translate3d(0,0,0);
  }
  20%, 53%, 80%, to {
    transform: translate3d(0,0.3rem,0);
  }

  40%, 43% {
    transform: translate3d(0, -0.5rem, 0);
  }

  70% {
    transform: translate3d(0, -0.2rem, 0);
  }

  90% {
    transform: translate3d(0,0,0);
  }
`
const animB = keyframes`

  25% {
    transform: rotate(7deg);
  }
  75% {
    transform: rotate(-7deg);
  }
`

const animC = keyframes`
  10% {
    transform: translate3d(0, 0, 0);
  }
  60% {
    transform: translate3d(0, -0.3rem, 0);
  }
  65% {
    transform: translate3d(0, 0, 0);
  }
`

const IconWrapper = styled(`span`)`
  display: block;
  height: 3rem;
  transition: 0.5s;
  width: 3rem;

  svg {
    height: 100%;
    width: 100%;
    color: #8a4baf;
  }
`

const RatingText = styled("span")`
  display: block;
  font-family: sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  transition: 0.5s;
  line-height: 1;
  margin-top: 0.25em;
`

const Label = styled("label")`
  align-items: center;
  background: #f6edfa;
  display: flex;
  flex-basis: 33.33%;
  flex-direction: column;
  justify-content: center;
  height: 5.5rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.25s;

  &.focused {
    background: #8a4baf;
    color: white;

    ${IconWrapper} {
      svg {
        color: #ffb238;
      }
    }
  }

  &:hover {
    &:nth-of-type(1) {
      ${IconWrapper} {
        transform: translateY(3.7rem);

        svg {
          animation: ${animC} 3s ease infinite;
        }
      }

      ${RatingText} {
        transform: translateY(-1.6rem);
      }
    }

    &:nth-of-type(2) {
      ${IconWrapper} {
        animation: ${animB} ease-in-out 0.8s infinite;
      }
    }

    &:nth-of-type(3) {
      ${IconWrapper} {
        animation: ${animA} 1.2s infinite;
      }
    }
  }
`

const Input = styled("input")`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
`

const RatingOption = ({
  emojiLabel,
  emoji,
  ratingText,
  ratingValue,
  checked,
  handleChange,
  icon: Icon,
}) => {
  return (
    <Label className={checked ? "focused" : null}>
      <IconWrapper>
        <Icon aria-label={emojiLabel} />
      </IconWrapper>
      <RatingText className="level">{ratingText}</RatingText>
      <Input
        type="radio"
        name="feedback"
        value={ratingValue}
        id={`rating${ratingValue}`}
        checked={checked}
        onChange={handleChange}
      />
    </Label>
  )
}

export default RatingOption
