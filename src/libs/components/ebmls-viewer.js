import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Alert, Card, Tag } from 'antd'

@observer
export default class EbmlsViewer extends Component {
  render() {
    return (
      <div className="EbmlsViewer">
        <Card title={<b>{this.props.title}</b>}>
        { this.props.store.ebmls.map( ( item, idx ) => {
          const { resLen, meta, resData } = item
          const l = ( meta && meta.level ) || 0
          const t = Array( l + 1 ).join("　　")
          const data = ( typeof resData === "string" && resData.length > 64 ) ? 
            resData.slice(0, 64) + "..." : 
            resData

          const len = (resLen && resLen.len)

          return (
            <div key={idx}>
              {/* when len is undefined, `meta` will include only alert message as label*/}
              {t}{ len ? (<b>{meta.label}</b>) : (<Alert type="error" message={meta.label} showIcon />) }

              { len && typeof len !== 'number' ? (<Tag style={{marginLeft: "0.5em"}} color="red">len = {len}</Tag>) : '' }
              { 
                resData !== undefined ? (
                  <span style={{fontSize: "0.95em"}}>: {data}</span> 
                ) : '' 
              }
            </div>
          )
        })}
        </Card>
      </div>
    )
  }
}