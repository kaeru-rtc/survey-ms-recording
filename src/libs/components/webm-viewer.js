import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
  Card,
  Col,
  Divider,
  Row,
  Tabs,
  Typography
  
} from 'antd'

import ShowHexDumps  from './show-hexdumps'
import ShowFinalDump from './show-final-dump'
import EbmlsViewer   from './ebmls-viewer'

const { Title } = Typography
const { TabPane } = Tabs

@observer
export default class WebmViewer extends Component {
  render() {
    return (
      <div>
        <Title level={2}>webm results</Title>
        <Card>
          <Tabs defaultActiveKey="1">
            <TabPane tab="structure" key="1">
              <Row gutter={16}>
                <Col span={12}>
                  <Title level={3}>ondataavailable</Title>
                  {
                    this.props.keys.map((key, idx) => {
                      const ebmls = this.props.store.mapEbmls.get(key)
                      const ts = new Date(key).toLocaleString()
                      return (
                        <div key={idx}>
                          <EbmlsViewer key={idx} store={{ ebmls }} title={ts} />
                        </div>)
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
    )
  }
}