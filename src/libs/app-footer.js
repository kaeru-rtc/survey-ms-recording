import React from 'react'
import {Typography} from 'antd'

const { Title, Text } = Typography

export default function AppFooter () {
  return(
    <div className="AppFooter">
      <Title level={3}>references:</Title>   
      <Text>
        <a href="https://developer.mozilla.org/ja/docs/Web/API/MediaStream_Recording_API">MDN - MediaStream MediaStream_Recording_API</a><br/>
        <a href="https://www.npmjs.com/package/customize-cra">How to apply mobx for create-react-app</a><br />
        <a href="https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/">How to supress decorator warning from vscode</a><br />
      </Text>
    </div>
  )
}