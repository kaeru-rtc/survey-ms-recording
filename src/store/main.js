import { observable, computed, action } from 'mobx'
import { parseEbml } from '../libs/common/ebml'
import hexdump from 'hexdump-js'

import { EventEmitter } from 'events'

const RECORDING_SEC = 5 
const SLICE_TIME = 400


export default class MainStore {
  @observable finalEmitter = new EventEmitter()
  @observable emitter = new EventEmitter()

  @observable constraints = { audio: true, video: false }
  @observable stream = null
  @observable remaining = RECORDING_SEC
  @observable chunks = []
  @observable mediaRecorder = null
  @observable blobs = []

  @observable ebmls = []
  @observable mapEbmls = new Map()

  @observable dumps = []
  @observable finaldump = ''

  @computed get remainingInPercent() {
    return (( RECORDING_SEC - this.remaining ) / RECORDING_SEC ) * 100
  }

  @action decreaseRemaining = _ => {
    this.remaining--
  }

  @action changeConstraints = newConstraints => (
    this.constraints = newConstraints
  )

  @action callGetUserMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia( this.constraints )
      .catch( err => { throw err })
    this.stream = stream
  }

  @action startRecording = _ => {
    this.mediaRecorder = new MediaRecorder( this.stream )
    this.mediaRecorder.start( SLICE_TIME )
    this.chunks.length = 0 // initialize chunks

    this.mediaRecorder.ondataavailable = async e => {
      const ab = await e.data.arrayBuffer()
      this.emitter.emit('data', ab)
      const ts = Date.now()

      this.mapEbmls.set( ts, parseEbml(ab))
      
      this.dumps.push( hexdump( ab ) )
      this.chunks.push( e.data )
    }
  }

  @action stopRecording = _ => {
    this.mediaRecorder.stop()

    this.mediaRecorder.onstop = async _ => {
      const mime = this.constraints.video ? 
        { 'type': "video/webm; codecs='vp8,opus'"} : 
        { 'type': 'audio/ogg; codecs=opus'}
      const blob = new Blob( this.chunks, mime)
      const ab = await blob.arrayBuffer()
      
      this.finalEmitter.emit('data', ab)

      this.ebmls = parseEbml( ab )
      this.finaldump = hexdump( ab )
      this.blobs.push( blob )
    }
  }

  @action stopGetUserMedia = _ => {
    const tracks = this.stream.getTracks()

    tracks.forEach( track => track.stop() )

    this.remaining = RECORDING_SEC
    this.stream = null
  }
}
