export const masks = [
  0x7f, 0x3f, 0x1f, 0x0f
]

export const ebmlIds = {
  /////////////////////////////////////////
  // EBML
  /////////////////////////////////////////
  "1A45DFA3": {
    level: 0,
    dataType: null,
    label: "EBML",
  },
  "4286": {
    level: 1,
    dataType: "integer",
    label: "EBMLVersion",
  },
  "42F7": {
    level: 1,
    dataType: "integer",
    label: "EBMLReadVersion"
  },
  "42F2": {
    level: 1,
    dataType: "integer",
    label: "EBMLMaxIDLength"
  },
  "42F3": {
    level: 1,
    dataType: "integer",
    label: "EBMLMaxSizeLength"
  },
  "4282": {
    level: 1,
    dataType: "string",
    label: "DocType"
  },
  "4287": {
    level: 1,
    dataType: "integer",
    label: "DocTypeVersion"
  },
  "4285": {
    level: 1,
    dataType: "integer",
    label: "DocTypeReadVersion"
  },
  /////////////////////////////////////////
  // SEGMENT
  /////////////////////////////////////////
  "18538067": {
    level: 0,
    dataType: null,
    label: "Segment"
  },
  "1549A966": {
    level: 1,
    dataType: null,
    label: "info"
  },
  "2AD7B1": {
    level: 2,
    dataType: "integer",
    label: "TimecodeScale"
  },
  "4489": {
    level: 2,
    dataType: "integer", // fixme - Duration MUST be float
    label: "Duration"
  },
  "4461": {
    level: 2,
    dataType: "date",
    label: "DateUTC"
  },
  "7BA9": {
    level: 2,
    dataType: "string",
    label: "Title"
  },
  "4D80": {
    level: 2,
    dataType: "string",
    label: "MuxingApp"
  },
  "5741": {
    level: 2,
    dataType: "string",
    label: "WritingApp"
  },
  /////////////////////////////////////////
  // TRACKS
  /////////////////////////////////////////
  "1654AE6B": {
    level: 1,
    dataType: null,
    label: "Tracks"
  },
  "AE": {
    level: 2,
    dataType: null,
    label: "TrackEntry"
  },
  "D7": {
    level: 3,
    dataType: "integer",
    label: "TrackNumber"
  },
  "73C5": {
    level: 3,
    dataType: "integer",
    label: "TrackUID"
  },
  "83": {
    level: 3,
    dataType: "integer",
    label: "TrackType"
  },
  "B9": {
    level: 3,
    dataType: "integer",
    label: "FlagEnabled"
  },
  "88": {
    level: 3,
    dataType: "integer",
    label: "FlagDefault"
  },
  "55AA": {
    level: 3,
    dataType: "integer",
    label: "FlagForced"
  },
  "9C": {
    level: 3,
    dataType: "integer",
    label: "FlagLacing"
  },
  "23E383": {
    level: 3,
    dataType: "integer",
    label: "DefaultDuration"
  },
  "55EE": {
    level: 3,
    dataType: "integer",
    label: "MaxBlockAdditionID"
  },
  "536E": {
    level: 3,
    dataType: "string",
    label: "Name"
  },
  "22B59C": {
    level: 3,
    dataType: "string",
    label: "Language"
  },
  "86": {
    level: 3,
    dataType: "string",
    label: "CodecID"
  },
  "63A2": {
    level: 3,
    dataType: "binary",
    label: "CodecPrivate"
  },
  "258688": {
    level: 3,
    dataType: "string",
    label: "CodecName"
  },
  "56AA": {
    level: 3,
    dataType: "integer",
    label: "CodecDelay"
  },
  "56BB": {
    level: 3,
    dataType: "integer",
    label: "SeekPreRoll"
  },
  "E0": {
    level: 3,
    dataType: null,
    label: "Video"
  },
  "9A": {
    level: 4,
    dataType: "integer",
    label: "FlagInterlaced"
  },
  "53B8": {
    level: 4,
    dataType: "integer",
    label: "StereoMode"
  },
  "53C0": {
    level: 4,
    dataType: "integer",
    label: "AlphaMode"
  },
  "B0": {
    level: 4,
    dataType: "integer",
    label: "PixelWidth"
  },
  "BA": {
    level: 4,
    dataType: "integer",
    label: "PixelHeight"
  },
  "54AA": {
    level: 4,
    dataType: "integer",
    label: "PixelCropBottom"
  },
  "54BB": {
    level: 4,
    dataType: "integer",
    label: "PixelCropTop"
  },
  "54CC": {
    level: 4,
    dataType: "integer",
    label: "PixelCropLeft"
  },
  "54DD": {
    level: 4,
    dataType: "integer",
    label: "PixelCropRight"
  },
  "54B0": {
    level: 4,
    dataType: "integer",
    label: "DisplayWidth"
  },
  "54BA": {
    level: 4,
    dataType: "integer",
    label: "DisplayHeight"
  },
  "54B2": {
    level: 4,
    dataType: "integer",
    label: "DisplayUnit"
  },
  "54B3": {
    level: 4,
    dataType: "integer",
    label: "AspectRatioType"
  },
  "E1": {
    level: 3,
    dataType: null,
    label: "Audio"
  },
  "B5": {
    level: 4,
    dataType: "float", // float
    label: "SamplingFrequency"
  },
  "78B5": {
    level: 4,
    dataType: "float", // float
    label: "OutputSamplingFrequency"
  },
  "9F": {
    level: 4,
    dataType: "integer",
    label: "Channels"
  },
  "6264": {
    level: 4,
    dataType: "integer",
    label: "BitDepth"
  },
  /////////////////////////////////////////
  // CLUSTER
  /////////////////////////////////////////
  "1F43B675": {
    level: 1,
    dataType: null, 
    label: "Cluster"
  },
  "E7": {
    level: 2,
    dataType: "integer", 
    label: "Timecode"
  },
  "AB": {
    level: 2,
    dataType: "integer", 
    label: "PrevSize"
  },
  "A3": {
    level: 2,
    dataType: "binary", 
    label: "SimpleBlock"
  },
  "A0": {
    level: 2,
    dataType: null, 
    label: "BlockGroup"
  },
  "A1": {
    level: 3,
    dataType: "binary", 
    label: "Block"
  },
  "75A1": {
    level: 3,
    dataType: null, 
    label: "BlockAdditions"
  },
  "A6": {
    level: 4,
    dataType: null, 
    label: "BlockMore"
  },
  "EE": {
    level: 5,
    dataType: "integer", 
    label: "BlockAddId"
  },
  "A5": {
    level: 5,
    dataType: "binary", 
    label: "BlockAdditional"
  },
  "9B": {
    level: 3,
    dataType: "integer", 
    label: "BlockDuration"
  },
  "FB": {
    level: 3,
    dataType: "integer",  // signed integer
    label: "ReferenceBlock"
  },
  "75A2": {
    level: 3,
    dataType: "integer",  // signed integer
    label: "DiscardPadding"
  },
}