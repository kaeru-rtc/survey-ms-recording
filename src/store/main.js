import { observable, computed, action } from 'mobx'
import { parseEbml } from '../libs/common/ebml'
import hexdump from 'hexdump-js'

const RECORDING_SEC = 1 
const SLICE_TIME = 400


export default class MainStore {
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

  @action decreaseRemaining = _ => {
    this.remaining--
  }

  @computed get remainingInPercent() {
    return ( RECORDING_SEC - this.remaining ) * 100
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
