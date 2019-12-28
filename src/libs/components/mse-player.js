import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Typography } from 'antd'
const { Title } = Typography

@observer
export default class MsePlayer extends Component {
  componentDidMount() {
    console.log('mse player mounted')
  }

  render() {
    return (
      <div className="MsePlayer">
        <Title level={3}>MSE Player</Title>
        { this.props.store.constraints.video ? (
          <video ref={ el => this.el = el } controls />
        ): (
          <audio ref={ el => this.el = el } controls />
        )}
      </div>
    )
  }
}