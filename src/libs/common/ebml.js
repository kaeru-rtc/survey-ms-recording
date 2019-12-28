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

  const _h = head & masks[ w - 1 ]
  len = w !== 8 ? _getLen( ab, pos, w, _h ) : "inifinite"
  id = _getEbmlId( ab, pos, w )

  return { w, len, id }
}

const _getData = (ab, pos, len, dataType) => {
  const buff = ab.slice( pos, pos+len )
  const u8arr = new Uint8Array( buff )

  if( dataType === "string" ) {
    return new TextDecoder("utf-8").decode(u8arr)
  } else if ( dataType === "binary" ) {
    const d = _getEbmlId( ab, pos, u8arr.length )
    return d.match(/.{2}/g).join(" ")
  } else if( dataType === 'float' ) {
    const v = new DataView( buff )
    return v.getFloat32()
  } else {
    // case - integer
    // tips - >>> 0 returns unsigned integer
    return u8arr.reduce( (prev, curr) => (
      ( prev << 8 ) + curr
    ), 0) >>> 0
  }
}

export const parseEbml = ab => {
  const max = ab.byteLength, ret = []
  let pos = 0, resId, resLen, resData, meta

  while( pos < ( max - 1 ) ) {
    resId = _getVint( ab, pos )

    meta = ebmlIds[resId.id]
    if( meta && meta.border ) console.log( "border - %d, %d", pos, max )
    pos += resId.w

    if( !meta ) {
      ret.push( { meta: {
        label: `cannot find meta info for ${resId.id}`
      }})
      break;
    }

    resLen = _getVint( ab, pos )
    pos += resLen.w

    if( meta.dataType ) {
      resData = _getData( ab, pos, resLen.len, meta.dataType )
      pos += resLen.len
    }

    ret.push({ resId, meta, resLen, resData })
    
    resData = null
  }

  return ret
}