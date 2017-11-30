import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import matchMediaDecorator from '@@/utils/matchMedia/decorator'

import LandscapeWarningView from '@@/views/LandscapeWarning'
import LoginView from '@@/views/Login'
import StickerPacksView from '@@/views/StickerPacks'
import CreateStickerPackView from '@@/views/CreateStickerPack'
import StickerPackView from '@@/views/StickerPack'
import StickerCreateView from '@@/views/StickerCreate'

const WIDTH = 300
const HEIGHT = 400

@inject('store')
@observer
@matchMediaDecorator({
	phoneLanscape: `(min-width: 400px)
		and (max-width: 768px)
		and (max-height: 500px)
		and (orientation: landscape)`
})
export default class App extends React.Component {
	state = {
		screen: 'select'
	}

	onSelectPhoto() {
		this.setState({ screen: 'adjust', image: { width: 200, height: 150 } })
	}

	renderRoutes() {
		const { store } = this.props
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={LoginView} />
					<Route path="/packs" exact component={StickerPacksView} />
					<Route path="/packs/create" exact component={CreateStickerPackView} />
					<Route path="/packs/:id/create" exact component={StickerCreateView} />
					<Route
						path="/packs/:id"
						exact
						render={props => {
							if (store.packs.has(props.match.params.id)) {
								return <StickerPackView {...props} />
							} else {
								return <Redirect to="/packs" />
							}
						}}
					/>
					<Route
						path="/create"
						exact
						render={() => <StickerCreateView />}
					/>
				</Switch>
			</BrowserRouter>
		)
	}

	render() {
		// return <TestView />
		const phoneLandscape = this.props.matches.phoneLanscape

		if (phoneLandscape) {
			return <LandscapeWarningView />
		} else {
			return this.renderRoutes()
		}
		// if (this.state.screen === 'select') {
		// return <SelectView onSelect={this.onSelectPhoto.bind(this)} />
		// } else if (this.state.screen === 'adjust') {
		// let {width, height} = this.state.image
		// return <AdjustView width={width} height={height} />
		// }
	}
}
