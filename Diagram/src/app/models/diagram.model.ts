export interface DiagramModel {
  nodes?:NodeDataModel[];
  connectors?:ConnectorDataModel[];
}

export interface NodeDataModel {
  id: string;
  //shape : string;
  name : string;
  offsetX : number;
  offsetY : number;
  height : number;
  width : number;
}

export interface ConnectorDataModel {
  id: string;
  name : string;
  sourceId : string;
  destinationId : string;
}
