import { List, Map } from 'immutable'

import { Heading } from 'components/atoms'
import { Navbar } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Header.scss'

const ARTICLES = 'articles'
const CAREERS = 'careers'
const EVENTS = 'events'
const TEAM = 'team'

export const navKeys = {
	[TEAM]: 'team',
	[ARTICLES]: 'articles',
	[EVENTS]: 'events',
	[CAREERS]: 'careers',
}

const Header = ({ selected }) => (
	<div className={classes.container}>
		<Heading
			accent="primary"
			bottomBorder={true}
			className={classes.siteName}
			color="white"
			level={3}
		>
			Liferay.Design
		</Heading>

		<Navbar
			className={classes.navbar}
			href={`#{option}`}
			key="navbar"
			options={List([TEAM, ARTICLES, EVENTS, CAREERS])}
			optionsMap={Map(navKeys)}
			selected={selected}
		/>
	</div>
)

Header.propTypes = {
	selected: PropTypes.string,
}

export default Header
