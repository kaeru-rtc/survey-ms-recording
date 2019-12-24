import React, {Component} from 'react'
import { observer } from 'mobx-react'

import GetUserMediaForm from './components/get-user-media-form'
import LocalMediaViewer from './components/local-media-viewer'
import ShowHexDumps from './components/show-hexdumps'
import ShowFinalDump from './components/show-final-dump'
import Remaining from './components/remaining'
import RecordedFiles from './components/recorded-files'
import EbmlsViewer from './components/ebmls-viewer'

import { 
  Card,
  Col, 
  Divider, 
  Row, 
  Tabs, 
  Typography 
} from 'antd'

const { Title } = Typography
const { TabPane } = Tabs


@observer
class AppMain extends Component {
  render() {
    const keys = this.props.store.mapEbmls.size > 0 ?
      Array.from(this.props.store.mapEbmls.keys()) : [] 

    return (
      <div className="AppMain">
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
          <div>
            <Title level={2}>webm results</Title>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="structure" key="1">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Title level={3}>ondataavailable</Title>
                      {
                        keys.map( (key, idx) => {
                          const ebmls = this.props.store.mapEbmls.get( key )
                          const ts = new Date( key ).toLocaleString()
                          return ( 
                            <div key={idx}>
                              <EbmlsViewer key={idx} store={{ebmls}} title={ts} />
                            </div> )
                          }) 
                      }
                    </Col>
                    <Col span={12}>
                      <Title level={3}>onstop</Title>
                      <EbmlsViewer {...this.props} title="final data" />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="hex dump" key="2">
                  <Row gutter={16}>
                    <Col span={12}>
                      <ShowHexDumps {...this.props} />
                    </Col>
                    <Col span={12}>
                      <ShowFinalDump {...this.props} />
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Card>
            <Divider />
          </div>
        ): ''}
        <Divider />
      </div>
    )
  }
}

export default AppMain