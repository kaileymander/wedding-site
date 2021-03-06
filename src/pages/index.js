import React from 'react';
import styled from 'styled-components';


import Layout from '../components/layout'
import Ribbon from '../components/ribbon';
import Flex from  '../components/flex';
import NamesSVG from '../components/names'
import DateSection from '../components/datesection'
import Number from '../components/number'

export default () => (
    <Layout>
      <Box pt='50px'>
        <Flex direction={'column'} height='600px'>
          <RibbionWrapper>
            <Ribbon />
          </RibbionWrapper>
          <ContentWrapper>
            <HashTag>#2BECOMEMUNN</HashTag>
            <NamesSVG />

      <Box width='200px' margin="10px auto">
            <Flex direction={'row'} justify={'space-around'}>
              <DateSection>SEPT</DateSection>
              <NumberWrapper>
                <Number />
              </NumberWrapper>
              <DateSection>2019</DateSection>
            </Flex>
            </Box>
          </ContentWrapper>
        </Flex>
      </Box>
    </Layout>
)

const HashTag = styled.div`
  color: #0C2237;
  font-family: 'FuturaBook';
  text-align: center;
  width: 100%;
  font-size: 0.6em;
  letter-spacing: 3px;
  margin-bottom:10px;
`

const RibbionWrapper = styled.div`
  align-self: flex-end;
`
const ContentWrapper = styled.div`
  align-self: center;
  width: 600px; 
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const NumberWrapper = styled.div`
  width:50px;
`

const Box = styled.div`
  padding-top: ${props => props.pt};
  width: ${props=>props.width};
  margin: ${props=>props.margin};
`