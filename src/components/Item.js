import React from 'react';
import styled from 'styled-components';

import LI from '../atoms/ListItem';
import Container from '../atoms/Container';
import Text from '../atoms/Text';

const ListItem = styled(LI)`
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme.dark};
  }
`

const Description = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis; 
`

const Item = ({ item }) => {
  return (
    <ListItem key={item.id} direction='row' padding='5px' width='calc(100% - 10px)'
      justifyContent='space-between' alignItems='center' hover>
      <Container maxWidth='50%' flowY='hidden' flowWrap>
        <Text>{item.name}</Text>
        <Description size='0.8em'>{item.type}</Description>
      </Container>

      <Container direction='row'>
        <Text margin='0 6px'>55 lb</Text>
        <Text margin='0 6px'>75 gp</Text>
      </Container>
    </ListItem>
  )
}

export default Item;