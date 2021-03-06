import React from 'react'
import {withRouter} from 'react-router'

import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'

import OverlayLayout from '@@/components/OverlayLayout'
import TopBar from '@@/components/TopBar'

@withRouter
export default class CreateStickerPackView extends React.Component {
	render() {
		return (
			<div>
				{this.renderTopBar()}
				<div style={{padding: '0 24px'}}>
					<TextField fullWidth={true} floatingLabelText='Name' />
					<TextField fullWidth={true} floatingLabelText='Title' />
					<FlatButton
						labelStyle={{fontSize: 18}}
						style={{display: 'block', margin: 'auto', fontSize: 18, marginTop: 24}}
					>
						DONE
					</FlatButton>
				</div>
			</div>
		)
	}

	renderTopBar() {
		let leftIcon = (
			<IconButton onClick={() => this.props.history.push('/packs')}>
				<ArrowBackIcon />
			</IconButton>
		)

		return <TopBar leftIcon={leftIcon}>Create sticker pack</TopBar>
	}
}
