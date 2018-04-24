import PropTypes from 'prop-types'
import React from 'react'
import classes from './Heading.scss'
import { colors } from 'theme'

const Heading = ({ accent, align, bottomBorder, className, color, children, level }) => {
	const Header = `h${level}`
	const borderClass = bottomBorder ? 'bottomBorder' : ''

	let styles = { color: colors[color], textAlign: align }

	if (accent) {
		styles = Object.assign({}, styles, {
			borderBottom: `3px solid ${colors[accent]}`,
			width: '20px',
		})
		console.log(styles)
	}

	return (
		<Header
			className={`${className} ${classes[Header]} ${classes[borderClass]}`}
			style={styles}
		>
			{children}
		</Header>
	)
}

Heading.propTypes = {
	accent: PropTypes.string,
	align: PropTypes.string,
	bottomBorder: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node,
	level: PropTypes.number.isRequired,
}

Heading.defaultProps = {
	level: 3,
	textAlign: 'left',
}

export default Heading
