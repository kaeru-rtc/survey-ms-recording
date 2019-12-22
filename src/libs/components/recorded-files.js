import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Typography } from 'antd'
const { Title } = Typography

@observer
export default class RecordedFiles extends Component {
  render() {
    const items = this.props.store.blobs.map( blob => (
      {
        url: window.URL.createObjectURL( blob),
        type: blob.type.includes("audio") ? "audio" : "video"
      }
    ))
    return (
      <div className="RecordedFiles">
        <Title level={3}>Recorded Files</Title>
        { items.map( ( item, idx ) => (
          item.type === "audio" ? (
            <div key={idx}>
              <audio src={item.url} controls />
            </div>
          ): (
            <div key={idx}>
              <video src={item.url} controls />
            </div>
          )
        ))}
      </div>
    )
  }
}