import React, { useRef, useState } from 'react';
import Styles from './Styles';
import Carousel from 'react-native-snap-carousel';
import { ParallaxImage } from 'react-native-snap-carousel';
import {Text, View, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default function UP({images}) {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    onSnapToItem: (index) => setSlideIndex(index),
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width,
    data: images,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };

  return (
    <View style={Styles.container}>
      <Carousel
        ref={carouselRef}
        activeSlide={slideIndex}
        images={images}
        {...settings}
      />
    </View>
  );
}

function CarouselItem({ item }, parallaxProps) {
  return (
    <View style={Styles.item}>
      <ParallaxImage
        source={{ uri: item.source }}
        containerStyle={Styles.imageContainer}
        {...parallaxProps}
      />
      <Text style={Styles.text}>ТАМ, ГДЕ ТВОЙ БИЗНЕС</Text>
    </View>
  );
}