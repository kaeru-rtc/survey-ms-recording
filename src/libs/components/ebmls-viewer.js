import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class EbmlsViewer extends Component {
  render() {
    return (
      <div className="EbmlsViewer">
        { this.props.store.ebmls.map( ( item, idx ) => {
          const { resId, meta, resData } = item
          const l = ( meta && meta.level ) || 0
          const t = Array( l + 1 ).join("　　")
          const data = ( typeof resData === "string" && resData.length > 64 ) ? 
            resData.slice(0, 64) + "..." : 
            resData

          const id = (resId && resId.id) || '-1'

          return (
            <div key={idx}>
              {t}<b>{meta.label}</b>: { 
                resData ? (
                  <span>{data}</span> 
                ) : '' 
              }
            </div>
          )
        })}
      </div>
    )
  }
}