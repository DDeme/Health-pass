//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
// import { Container, Row, Col } from 'react-bootstrap'

const H1: FC = styled.h1`
	text-align: center;
`

const Home: FC = (): JSX.Element => {
	return <H1>Home</H1>
}

export default Home
