import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Typography } from 'antd'
const { Title } = Typography

@observer
export default class LocalMediaViewer extends Component {
  componentDidMount() {
    this.media.srcObject = this.props.store.stream
    this.media.onloadedmetadata = _ => {
      this.media.play()
    }
  }
  render() {
    return (
      <div className="LocalMediaViewer">
        <Title level={3}>Recording...</Title>
        { !this.props.store.constraints.video ?
          ( <audio ref={ a => { this.media = a }} controls/>) :
          ( <video ref={ v => { this.media = v }} controls/>)
        }
      </div>
    )
  }
}