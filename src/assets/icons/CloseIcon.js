import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path d="M15.8198 13.8L27.7812 25.6475L25.9615 27.45L14 15.6024L2.03853 27.45L0.21875 25.6475L12.1802 13.8L0.21875 1.95244L2.03853 0.149994L14 11.9975L25.9615 0.149994L27.7812 1.95244L15.8198 13.8Z" fill="black"/>
  </CloseIconWrapper>
);