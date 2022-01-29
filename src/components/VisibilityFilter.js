import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import object from 'prop-types'
import React from 'react';
import { VISIBILITY_FILTER } from '../constants';

const VisibilityFilter = () => {
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default VisibilityFilter;