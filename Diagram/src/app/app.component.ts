import { Component, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, ConnectorModel, LinearGradientModel, PaletteModel, PointPortModel } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorDataModel, DiagramModel, NodeDataModel } from './models/diagram.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  
  public diagramData: DiagramModel;

  @ViewChild('diagram')

  public diagram: DiagramComponent;
  title = 'diagram';

  public linearGradient: LinearGradientModel = {
    x1: 0,
    y1: 0,
    x2: 50,
    y2: 50,
    stops: [
      {
        color: 'white',
        offset: 0,
      },
      {
        color: '#6BA5D7',
        offset: 100,
      },
    ],
    type: 'Linear',
  };

  private flowshapes: NodeModel[] = [
    {
      id: 'Terminator',
      shape: { type: 'Flow', shape: 'Terminator' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'Process',
      shape: { type: 'Flow', shape: 'Process' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'Decision',
      shape: { type: 'Flow', shape: 'Decision' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'Document',
      shape: { type: 'Flow', shape: 'Document' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'PreDefinedProcess',
      shape: { type: 'Flow', shape: 'PreDefinedProcess' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'PaperTap',
      shape: { type: 'Flow', shape: 'PaperTap' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'DirectData',
      shape: { type: 'Flow', shape: 'DirectData' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'SequentialData',
      shape: { type: 'Flow', shape: 'SequentialData' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
    {
      id: 'Sort',
      shape: { type: 'Flow', shape: 'Sort' },
      style: {
        fill: '#cbcac4',
        strokeColor: 'white',
        gradient: this.linearGradient,
      },
    },
  ];

  private connectorSymbols: ConnectorModel[] = [
    {
      id: 'Link1',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
  ];

  public palettes: PaletteModel[] = [
    {
      id: 'flow',
      expanded: true,
      symbols: this.flowshapes,
      iconCss: 'shapes',
      title: 'Flow Shapes',
    },
    {
      id: 'connectors',
      expanded: true,
      symbols: this.connectorSymbols,
      iconCss: 'shapes',
      title: 'Connectors',
    },
  ];

  public node: NodeModel = {
    offsetX: 50,
    offsetY: 50,
    width: 100,
    height: 100,
    borderWidth: 10,
    style: {
      fill: '#000000',
      strokeColor: 'black',
      gradient: this.linearGradient,
    },
  };

  public connectors : ConnectorModel = {
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 10,
      y: 10,
    },
    targetPoint: {
      x: 90,
      y: 90,
    },
  };

  public addNode() {
    this.node.ports = getPorts(this.node);
    this.diagram.add(this.node);
  }

  public addConnector() {
    this.diagram.add(this.connectors);
  }

  public showDetails(){
    console.log(this.diagramData);
  }
  public valueChange($event:any) {
    var nodeList: NodeDataModel[] = [];
    var connectorList: ConnectorDataModel[] = [];
    this.diagram.nodes.forEach((element) => {
      const nodeData: NodeDataModel = {
        id: element.id,
        name: element.annotations[0] ? element.annotations[0].content : '',
        height: element.height,
        width: element.width,
        offsetX: element.offsetX,
        offsetY: element.offsetY,
      };
      nodeList.push(nodeData);
    });

    this.diagram.connectors.forEach((element) => {
      const connectorData: ConnectorDataModel = {
        id: element.id,
        name: element.annotations[0] ? element.annotations[0].content : '',
        sourceId: element.sourceID,
        destinationId: element.targetID,
      };
      connectorList.push(connectorData);
    });

    this.diagramData = {
      nodes: nodeList,
      connectors: connectorList,
    };
  }
}

function getPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    { id: 'port1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
    { id: 'port2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
    { id: 'port3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
    { id: 'port4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
  ];
  return ports;
}