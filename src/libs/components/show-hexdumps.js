import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Typography } from 'antd'
const { Title } = Typography


@observer
export default class ShowHexDumps extends Component {
  render() {
    return (
      <div className="ShowHexDumps">
        <Title level={4}>Hex Dumps while recording</Title>
        { this.props.store.dumps.map( (str, idx) => (
          <pre key={idx}>{str}</pre>
        ))}
      </div>
    )
  }
}