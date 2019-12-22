export const masks = [
  0x7f, 0x3f, 0x1f, 0x0f
]

export const ebmlIds = {
  /////////////////////////////////////////
  // EBML
  /////////////////////////////////////////
  "1A45DFA3": {
    dataType: null,
    label: "EBML"
  },
  "4286": {
    dataType: "integer",
    label: "EBMLVersion"
  },
  "42F7": {
    dataType: "integer",
    label: "EBMLReadVersion"
  },
  "42F2": {
    dataType: "integer",
    label: "EBMLMaxIDLength"
  },
  "42F3": {
    dataType: "integer",
    label: "EBMLMaxSizeLength"
  },
  "4282": {
    dataType: "string",
    label: "DocType"
  },
  "4287": {
    dataType: "integer",
    label: "DocTypeVersion"
  },
  "4285": {
    dataType: "integer",
    label: "DocTypeReadVersion"
  },
  /////////////////////////////////////////
  // SEGMENT
  /////////////////////////////////////////
  "18538067": {
    dataType: null,
    label: "Segment"
  },
  "1549A966": {
    dataType: null,
    label: "info"
  },
  "2AD7B1": {
    dataType: "integer",
    label: "TimecodeScale"
  },
  "4489": {
    dataType: "integer", // fixme - Duration MUST be float
    label: "Duration"
  },
  "4461": {
    dataType: "date",
    label: "DateUTC"
  },
  "7BA9": {
    dataType: "string",
    label: "Title"
  },
  "4D80": {
    dataType: "string",
    label: "MuxingApp"
  },
  "5741": {
    dataType: "string",
    label: "WritingApp"
  },
  /////////////////////////////////////////
  // TRACKS
  /////////////////////////////////////////
  "1654AE6B": {
    dataType: null,
    label: "Tracks"
  },
  "AE": {
    dataType: null,
    label: "TrackEntry"
  },
  "D7": {
    dataType: "integer",
    label: "TrackNumber"
  },
  "73C5": {
    dataType: "integer",
    label: "TrackUID"
  },
  "83": {
    dataType: "integer",
    label: "TrackType"
  },
  "B9": {
    dataType: "integer",
    label: "FlagEnabled"
  },
  "88": {
    dataType: "integer",
    label: "FlagDefault"
  },
  "55AA": {
    dataType: "integer",
    label: "FlagForced"
  },
  "9C": {
    dataType: "integer",
    label: "FlagLacing"
  },
  "23E383": {
    dataType: "integer",
    label: "DefaultDuration"
  },
  "55EE": {
    dataType: "integer",
    label: "MaxBlockAdditionID"
  },
 
  "536E": {
    dataType: "string",
    label: "Name"
  },
  "22B59C": {
    dataType: "string",
    label: "Language"
  },
  "86": {
    dataType: "string",
    label: "CodecID"
  },
  "63A2": {
    dataType: "binary",
    label: "CodecPrivate"
  },
  "258688": {
    dataType: "string",
    label: "CodecName"
  },
  "56AA": {
    dataType: "integer",
    label: "CodecDelay"
  },
  "56BB": {
    dataType: "integer",
    label: "SeekPreRoll"
  },
  "E0": {
    dataType: null,
    label: "Video"
  },
  "9A": {
    dataType: "integer",
    label: "FlagInterlaced"
  },
  "53B8": {
    dataType: "integer",
    label: "StereoMode"
  },
  "53C0": {
    dataType: "integer",
    label: "AlphaMode"
  },
  "B0": {
    dataType: "integer",
    label: "PixelWidth"
  },
  "BA": {
    dataType: "integer",
    label: "PixelHeight"
  },
  "54AA": {
    dataType: "integer",
    label: "PixelCropBottom"
  },
  "54BB": {
    dataType: "integer",
    label: "PixelCropTop"
  },
  "54CC": {
    dataType: "integer",
    label: "PixelCropLeft"
  },
  "54DD": {
    dataType: "integer",
    label: "PixelCropRight"
  },
  "54B0": {
    dataType: "integer",
    label: "DisplayWidth"
  },
  "54BA": {
    dataType: "integer",
    label: "DisplayHeight"
  },
  "54B2": {
    dataType: "integer",
    label: "DisplayUnit"
  },
  "54B3": {
    dataType: "integer",
    label: "AspectRatioType"
  },
  "E1": {
    dataType: null,
    label: "Audio"
  },
  "B5": {
    dataType: "float", // float
    label: "SamplingFrequency"
  },
  "78B5": {
    dataType: "float", // float
    label: "OutputSamplingFrequency"
  },
  "9F": {
    dataType: "integer",
    label: "Channels"
  },
  "6264": {
    dataType: "integer",
    label: "BitDepth"
  },
  /////////////////////////////////////////
  // CLUSTER
  /////////////////////////////////////////
  "1F43B675": {
    dataType: null, 
    label: "Cluster"
  },
  "E7": {
    dataType: "integer", 
    label: "Timecode"
  },
  "AB": {
    dataType: "integer", 
    label: "PrevSize"
  },
  "A3": {
    dataType: "binary", 
    label: "SimpleBlock"
  },
  "A0": {
    dataType: null, 
    label: "BlockGroup"
  },
  "A1": {
    dataType: "binary", 
    label: "Block"
  },
  "75A1": {
    dataType: null, 
    label: "BlockAdditions"
  },
  "A6": {
    dataType: null, 
    label: "BlockMore"
  },
  "EE": {
    dataType: "integer", 
    label: "BlockAddId"
  },
  "A5": {
    dataType: "binary", 
    label: "BlockAdditional"
  },
  "9B": {
    dataType: "integer", 
    label: "BlockDuration"
  },
  "FB": {
    dataType: "integer",  // signed integer
    label: "ReferenceBlock"
  },
  "75A2": {
    dataType: "integer",  // signed integer
    label: "DiscardPadding"
  },
}