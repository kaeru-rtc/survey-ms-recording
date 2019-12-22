import React, {Component} from 'react'
import { observer } from 'mobx-react'

import GetUserMediaForm from './components/get-user-media-form'
import LocalMediaViewer from './components/local-media-viewer'
import ShowHexDumps from './components/show-hexdumps'
import ShowFinalDump from './components/show-final-dump'
import Remaining from './components/remaining'
import RecordedFiles from './components/recorded-files'

import { Col, Row } from 'antd'


@observer
class AppMain extends Component {
  render() {
    return (
      <div className="AppMain">
        { !this.props.store.stream ?
          (<GetUserMediaForm {...this.props} />) :
          (
            <div>
              <LocalMediaViewer {...this.props} />
              <Remaining {...this.props} />
            </div>
          )
        }
        <Row gutter={16}>
          <Col span={12}>
            <ShowHexDumps {...this.props} />
          </Col>
          <Col span={12}>
            <ShowFinalDump {...this.props} />
          </Col>
        </Row>
        {
          this.props.store.blobs.length > 0 ? (
            <RecordedFiles {...this.props} />
          ): ''
        }
      </div>
    )
  }
}

export default AppMain