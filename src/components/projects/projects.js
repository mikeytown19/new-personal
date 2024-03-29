import React from "react";
import { CardList } from "./CardList";
import styled from '@emotion/styled'
import { media}  from '../../styles'

export const Projects = () => {
  return (
    <StyledProjects>
      <CardList />
    </StyledProjects>
  );
}

const StyledProjects = styled.div`

.projects {
  font-family: sans-serif;
  text-align: center;
  max-width: 1000px;
  margin: auto;
}

    body {
      overflow-y: scroll;
      --secondary: rgb(161, 161, 161);
      --divider: #343434;
    }


.root {
  display: flex;
  justify-content: center;
}

.screen {
  width: 100%;
  height: 100%;
}

.container {
  max-width: 990px;
  flex: 1 1 100%;
  padding: 45px 25px;
}

h3 {
  font-weight: bold;
  color: white;
  margin: 6px 0 12px;
  font-size: 28px;
}

.date {
  color: var(--secondary);
  font-size: 14px;
  text-transform: uppercase;
}

header {
  border-bottom: 1px solid var(--divider);
  position: relative;
}

.avatar {
  background: var(--divider);
  border-radius: 50%;
  position: absolute;
  bottom: 12px;
  right: 0;
  overflow: hidden;
}

.avatar,
.avatar img {
  width: 40px;
  height: 40px;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  position: relative;
  padding: 25px;
  height: 460px;
  flex: 0 0 40%;
  max-width: 40%;
}

.card:nth-of-type(4n + 1),
.card:nth-of-type(4n + 4) {
  flex: 0 0 60%;
  max-width: 60%;
}

.card:nth-of-type(odd) {
  padding-left: 0;
}

.card:nth-of-type(even) {
  padding-right: 0;
}

.card-content-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;
}

.card-content-container.open {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  padding: 40px 0;
}

.card-content {
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: #1c1c1e;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.open .card-content {
  height: auto;
  max-width: 700px;
  overflow: hidden;
}

.card-open-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.card-image-container {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100vw;
  transform: translateZ(0);
}

.title-container {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 300px;
  text-align: left;

  ${media.small} {
    max-width: 240px;
  }
}


.category {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}

.overlay {
  z-index: 1000;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  overflow: auto;

}

.overlay a {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  left: 50%;

  transform: translateX(-50%);
}

.content-container {
  padding: 460px 35px 35px 35px;
  max-width: 700px;
  width: 90vw;
}

p {
  color: #9d9ca1;
  font-size: 20px;
  line-height: 28px;
}

@media only screen and (max-width: 800px) {
  .card {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .card:nth-of-type(4n + 1),
  .card:nth-of-type(4n + 4) {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .card {
    flex: 1 0 100%;
    max-width: 80%;
    padding-left: 0;
    padding-right: 0;
    margin: auto;
  }

  .card:nth-of-type(4n + 1),
  .card:nth-of-type(4n + 4) {
    flex: 1 0 100%;
    max-width: 80%;
    margin: auto;
  }

  .card-content-container.open {
    padding: 0;
  }
}
`