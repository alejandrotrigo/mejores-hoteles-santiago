import React from 'react'
import useParallax from './useParallax';
import { ParallaxSection, ParallaxWrapper } from './parallax.styles';
import { Card } from '../Card/Card';
import { CardHeader } from '../Card/CardHeader';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Parallax = () => {
	const [scrollPosition, setScrollPosition] = React.useState(0);
	useParallax(setScrollPosition);

	return (
		<ParallaxSection size={`cover`}>
			<SectionTitle title='Pricing' color='white'/>
			<ParallaxWrapper>
				<Card>
					<CardHeader title='Basic' price={20} color='green'/>
				</Card>

				<Card>
					<CardHeader title='Enterprise' price={30} color='blue'/>
				</Card>

				<Card>
					<CardHeader title='Premium' price={40} color='red'/>
				</Card>

				<Card>
					<CardHeader title='Custom' color='black'/>
				</Card>
			</ParallaxWrapper>
		</ParallaxSection>
	)
}
