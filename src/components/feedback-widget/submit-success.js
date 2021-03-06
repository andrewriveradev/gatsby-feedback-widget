import React from "react"
import styled from "@emotion/styled"
import WidgetWrapper from "./widget-wrapper"
import { CloseButton } from "./buttons"
import { Title as BaseTitle } from "./styled-elements"

const Title = styled(BaseTitle)`
  font-size: 1.8rem;
  margin-bottom: 1em;
  text-align: left;
`

const SubmitSuccess = ({ handleClose, titleRef }) => (
  <WidgetWrapper className="feedback-success" handleClose={handleClose}>
    <Title ref={titleRef} tabIndex="-1">
      Thanks for your feedback!
    </Title>
    <p>Your ratings and comments can help make Gatsby even better.</p>
    <CloseButton className="dismiss" onClick={handleClose}>
      Dismiss
    </CloseButton>
  </WidgetWrapper>
)

export default SubmitSuccess
