import React, { Component } from 'react';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'prev' : 'next',
      sliding: false
    }
    this.getOrder = this.getOrder.bind(this);
    this.doSliding = this.doSliding.bind(this);
  }
  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2) return itemIndex

    if (itemIndex - position < 0) return numItems - Math.abs(itemIndex - position)
    return itemIndex - position
  }

  doSliding = (direction, position) => {
    console.log('position is', position);
    this.setState({
      sliding: true,
      direction,
      position
    })

    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 1) return

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 0) return

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
}

  render() {
    const { title, children } = this.props

    return (
      <div>
        <h2>{ title }</h2>

        <Wrapper>
          <CarouselContainer sliding={ this.state.sliding }
            direction={ this.direction }
          >
            { children.map((child, index) => (
              <CarouselSlot
                key={ index }
                order={ this.getOrder(index) }
                position={ this.position }
              >
                {child}
              </CarouselSlot>
            )) }
          </CarouselContainer>
        </Wrapper>
        <button onClick={ () => this.prevSlide() }>Prev</button>
        <button onClick={ () => this.nextSlide() }>Next</button>
      </div>
    )
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
