import React, { Component } from 'react'
import {observer} from 'mobx-react'

import { Typography } from 'antd'
const { Title } = Typography

@observer
export default class ShowFinalDump extends Component {
  render() {
    return (
      <div className="ShowFinalDump">
        <Title level={4}>Final hex dump</Title>
        { this.props.store.finaldump !== '' ? (
          <pre>{this.props.store.finaldump}</pre>
        ): '' }
      </div>
    )
  }
}
