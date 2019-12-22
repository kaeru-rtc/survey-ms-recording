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
    dataType: "integer",
    label: "Duration"
  },
  "4461": {
    dataType: "integer",
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
    dataType: "integer",
    label: "CodecPrivate"
  },
  "258688": {
    dataType: "string",
    label: "CodecName"
  },
}