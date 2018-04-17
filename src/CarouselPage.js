import React, { Component } from 'react';
import styled from 'styled-components'

import Carousel from './Carousel'

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
`

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel
          title="Carousel"
        >
          <Item index={ 1}>Item 0 </Item>
          <Item index={ 2 }>Item 1</Item>
          <Item index={ 3 }>Item 2 </Item>
          <Item index={ 4 }>Item 3</Item>
        </Carousel>
      </div>
    );
  }
}
