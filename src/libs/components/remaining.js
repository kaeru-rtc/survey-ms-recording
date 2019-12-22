import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Progress } from 'antd'

@observer
export default class Remaining extends Component {
  componentDidMount() {
    this.interval = setInterval( _ => {
      this.props.store.decreaseRemaining()
      if(this.props.store.remaining === 0) {
        clearInterval( this.interval )
        this.props.store.stopRecording()

        this.props.store.stopGetUserMedia()
      }
    }, 1000)

    this.props.store.startRecording()
  }
  render() {
    const msg = this.props.store.remaining > 0 ?
      `${this.props.store.remaining} sec left` :
      'DONE!'

    return (
      <div className="Remaining">
        <Progress 
          style={{ width: "50vw"}}
          type="line" 
          percent={this.props.store.remainingInPercent}
          format={ _ => msg} />
      </div>
    )
  }
}