import React, {Component} from 'react'
import { observer } from 'mobx-react'

import GetUserMediaForm from './components/get-user-media-form'
import LocalMediaViewer from './components/local-media-viewer'
import Remaining from './components/remaining'
import RecordedFiles from './components/recorded-files'
import WebmViewer from './components/webm-viewer'

import MsePlayer from './components/mse-player'

import { 
  Alert,
  Card,
  Divider, 
  Typography 
} from 'antd'

const { Title } = Typography


@observer
class AppMain extends Component {
  render() {
    const keys = this.props.store.mapEbmls.size > 0 ?
      Array.from(this.props.store.mapEbmls.keys()) : [] 

    return (
      <div className="AppMain">
        <Alert type="info" message="todo: check simple block (opus and vp8)" showIcon />
        
        <MsePlayer {...this.props} />
        <Title level={2}>Get local stream</Title>
        { !this.props.store.stream ?
          (<GetUserMediaForm {...this.props} />) :
          (
            <div>
              <LocalMediaViewer {...this.props} />
              <Remaining {...this.props} />
            </div>
          )
        }
        {
          this.props.store.blobs.length > 0 ? (
            <Card>
              <RecordedFiles {...this.props} />
            </Card>
          ): ''
        }
        { keys.length > 0 ? (
          <WebmViewer {...this.props} keys={keys} />
        ): ''}
        <Divider />
      </div>
    )
  }
}

export default AppMain