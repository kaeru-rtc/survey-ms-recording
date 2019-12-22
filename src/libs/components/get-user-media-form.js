import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Button, Radio } from 'antd'

@observer
export default class GetUserMediaForm extends Component {
  handleConstraintsChange = e => {
    const video = e.target.value === 1 ? false : true
    this.props.store.changeConstraints( {audio: true, video })
  }

  render() {
    const audioOnly = !this.props.store.constraints.video ? 1 : 2
    return (
      <div className="GetUserMediaForm">
        <Radio.Group onChange={this.handleConstraintsChange} value={audioOnly}>
          <Radio value={1}>Opus only</Radio>
          <Radio value={2}>VP8 and Opus</Radio>
        </Radio.Group>
        <Button type="primary" onClick={this.props.store.callGetUserMedia}>
          Start getUserMedia()
        </Button>
      </div>
    )
  }
}