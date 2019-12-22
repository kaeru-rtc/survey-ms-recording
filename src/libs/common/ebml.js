import { masks, ebmlIds } from './ebml-ids'

const _getLen = ( ab, pos, w, newHead ) => {
  const u8arr = new Uint8Array( ab.slice( pos, pos + w ))
  u8arr[0] = newHead

  return u8arr.reduce( (prev, curr) => (
    ( prev << 8 ) + curr
  ), 0)
}

const _getEbmlId = ( ab, pos, w ) => {
  const arr = new Uint8Array( ab.slice( pos, pos + w ))
  return arr.reduce( ( prev, curr ) => (
    prev + ('0' + curr.toString(16)).slice(-2)
  ), '').toUpperCase()
}


const _getVint = ( ab, pos ) => {
  const head = new Uint8Array(ab.slice( pos, pos + 1 ))
  let len, w, id

  // get VINT width
  if( head & 0x80 ) {
    w = 1
  } else if ( head & 0x40 ) {
    w = 2
  } else if ( head & 0x20 ) {
    w = 3
  } else if ( head & 0x10 ) {
    w = 4
  } else if ( head & 0x08 ) {
    w = 5
  } else if ( head & 0x04 ) {
    w = 6
  } else if ( head & 0x02 ) {
    w = 7
  } else if ( head & 0x01 ) {
    w = 8
  } else {
    w = -1
  }

  // get VINT len
  // if( w < 5 ) {
    const _h = head & masks[ w - 1 ]
    len = _getLen( ab, pos, w, _h )
    id = _getEbmlId( ab, pos, w )
  // } else {
  //   len = -1
  //   id = 'FFFFFFFFFFFFFF'
  // }

  return { w, len, id }
}

const _getData = (ab, pos, len, dataType) => {
  const buff = ab.slice( pos, pos+len )
  const u8arr = new Uint8Array( buff )

  if( dataType === "string" ) {
    return new TextDecoder("utf-8").decode(u8arr)
  } else if ( dataType === "binary" ) {
    return `length: ${u8arr.length}`
  } else {
    // tips - >>> 0 returns unsigned integer
    return u8arr.reduce( (prev, curr) => (
      ( prev << 8 ) + curr
    ), 0) >>> 0
  }
}

export const parseEbml = ab => {
  // just debug
  const arr = new Uint8Array( ab )

  const max = ab.byteLength
  let pos = 0, resId, resLen, resData, meta

  while( pos < ( max - 1 ) ) {
    resId = _getVint( ab, pos )
    pos += resId.w

    meta = ebmlIds[resId.id]
    if( !meta ) {
      console.warn( resId )
      console.warn(`cannot find meta info for ${resId.id}`)
      break
    }

    resLen = _getVint( ab, pos )
    pos += resLen.w

    if( meta.dataType ) {
      resData = _getData( ab, pos, resLen.len, meta.dataType )
      pos += resLen.len
    }

    console.log( JSON.stringify({ meta, resData }, null, 2) )
    
    resData = null
  }
}