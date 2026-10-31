import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MouseEvent } from '@agm/core';
import * as MarkerClusterer from "@google/markerclusterer"
import { ClusterOptions, ClusterStyle } from '@agm/js-marker-clusterer/services/google-clusterer-types';
import {icon, latLng, marker} from 'leaflet';
import "leaflet/dist/leaflet.css";
// import * as MarkerClusterer from "@google/markerclusterer"
import * as L from "leaflet";
import "leaflet.markercluster";
import {MatDialog} from "@angular/material/dialog";
import {DashboardService} from '../../shared/service/dashboard.service'
interface marker {
	lat: number;
	lng: number;
	label?: any;
	draggable: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columnChart:any;
  columnChart2:any;
  donutChart:any;
  donutChart2:any;
  lat:number= 28.53995861;
  lng:number=-77.41299583;


  constructor(public dialog: MatDialog,private dashboardService:DashboardService ) {
    this.getDiscoms();
    this.getAllMapData();
  }

chartData: any={
  center: 12344,
  side1: 50.41,
  side2: 25.45
};
 discoms:any=[];
optionData:any={
  discom:"all",
  zone:'all',
  district:'all',
  circle:'all',
  division:'all',
  sub_division:'all',
  sub_station:'all'
}

getDiscoms(){
  this.dashboardService.getDiscoms().subscribe(res=>{
    console.log(res);
    this.discoms=res.entries.entry;
    console.log(this.discoms);
  })
}
zones:any=[];
getDiscomMapData(value){
  let dis =value;
  this.dashboardService.getMapDataDiscom(dis).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),8);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}
getZone(value){
  this.optionData.discom=value;
  this.getDiscomMapData(this.optionData.discom);
  this.dashboardService.getZone(this.optionData).subscribe(res=>{
    console.log(res);
    this.zones=res.entries.entry;
  })
}
getZonemMapData(){
  this.dashboardService.getMapDataZone(this.optionData).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),9);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}
districts:any=[];
getDistrict(value){
  this.optionData.zone=value;
  this.getZonemMapData();
  this.dashboardService.getDistrict(this.optionData).subscribe(res=>{
    console.log(res);
    this.districts=res.entries.entry;
  })
}
getDistrictMapData(){
  this.dashboardService.getMapDataDistrict(this.optionData).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),10);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}

circles:any=[];
getCircle(value){
  this.optionData.district=value;
  this.getDistrictMapData();
  this.dashboardService.getCircle(this.optionData).subscribe(res=>{
    console.log(res);
    this.circles=res.entries.entry;
  })
}
getCircleMapData(){
  this.dashboardService.getMapDataCircle(this.optionData).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),10);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}

divisions:any=[];
getDivision(value){
  this.optionData.circle=value;
  this.getCircleMapData();
  this.dashboardService.getDivision(this.optionData).subscribe(res=>{
    console.log(res);
    this.divisions=res.entries.entry;
  })
}
getDivisionMapData(){
  this.dashboardService.getMapDataDivision(this.optionData).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),11);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}

subDivisions:any=[];
getSubDivision(value){
  this.optionData.division=value;
  this.getDivisionMapData();
  this.dashboardService.getSubDivision(this.optionData).subscribe(res=>{
    console.log(res);
    this.subDivisions=res.entries.entry;
  })
}
getSubDivisionMapData(){
  this.dashboardService.getMapDataSubDivision(this.optionData).subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),12);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
  
}
subStations:any=[];
getSubStation(value){
  this.optionData.sub_division=value;
  this.getSubDivisionMapData();
  this.dashboardService.getSubStation(this.optionData).subscribe(res=>{
    console.log(res);
    this.subStations=res.entries.entry;
  })
}

getSubStationMapData(value){
  this.optionData.sub_station=value;
  this.dashboardService.getMapDataSubStation(this.optionData).subscribe(res=>{
    const data: any[] = [];
    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),13);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
  })
}

centerData:any={
  lat:'',
  lng:''
}
getAllMapData(){
  this.dashboardService.get_All_Feeder_Map_data().subscribe(res=>{
    const data: any[] = [];

    for (let i = 0; i < res.entries.entry.length; i++) {
      const icon2 = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });
this.centerData.lat=res.entries.entry[0].latitude;
this.centerData.lng=res.entries.entry[0].longitude;
      data.push(L.marker([res.entries.entry[i].latitude, res.entries.entry[i].longitude]));
    }
    this.map.setView(new L.LatLng(this.centerData.lat, this.centerData.lng),8);
    console.log(data);
    this.markerClusterData = data;
    this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: false});
  })
}



disco:any=[{value:'ALL',id:'1'},
{value:'PuVVNL',id:'2'},
{value:'PVVNL',id:'3'},
{value:'DVVNL',id:'4'},
{value:'MVVNL',id:'5'},
{value:'KESCo',id:'6'}]






  // new
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  myFooList = ['Noida', 'GHAZIABAD'];


  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, {
      data: this.myFooList,
    });
    myTempDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }

  // end
clusterStyles: ClusterStyle[];
clusterOptions: ClusterOptions;
lastLayer:any;
mapPoint:any;
private createMarker() {
  const mapIcon = this.getDefaultIcon();
  const coordinates = latLng([28.53995861, 77.178]);
  this.lastLayer = marker(coordinates).setIcon(mapIcon);
  this.markerClusterGroup.addLayer(this.lastLayer);
  }
  coord:any=[];

   layersControl;
   layers;
   tile_map;
   map;
private getDefaultIcon() {
  return icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/marker-icon.png'
  });
}
private addLayersToMap() {
this.markerClusterGroup.addTo(this.map);
}
LAYER_OSM = {
  id: "openstreetmap",
  name: "Open Street Map",
  enabled: false,
  layer: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "Open Street Map"
  })
};

// Values to bind to Leaflet Directive
layersControlOptions = { position: "right" };
baseLayers = {
  "Open Street Map": this.LAYER_OSM.layer
};
options = {
  zoom: 8,
  center: L.latLng([29.46445722, 77.178])
};

// Marker cluster stuff
markerClusterGroup: L.MarkerClusterGroup;
markerClusterData: any[] = [];
markerClusterOptions: L.MarkerClusterGroupOptions;

// Generators for lat/lon values
generateLat() {

  return Math.random() * 2*3;
}


generateLon() {
  return Math.random() * 2*3;
}
  ngOnInit(): void {
    // this.markerClusterData= [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
    //   // tslint:disable-next-line:max-line-length
    // L.marker([29.62132417, 78.36183222]), L.marker([28.1341873, 77.9163238]), L.marker([28.76006, 77.3007]), L.marker([28.5037164, 77.9499735]), L.marker([29.38693167, 78.12311806]), L.marker([28.83342363, 78.7358805]), L.marker([28.2729063, 78.4190023]), L.marker([28.53995861, 77.41299583]), L.marker([29.595, 77.178]), L.marker([29.46445722, 77.31156278]), L.marker([29.6035732, 78.3406217]),
    //   L.marker([29.3894845, 78.6783923]),
    //   L.marker([28.64310306, 77.38003389]),
    
    //   L.marker([28.96614028, 77.70909417]),
    //   L.marker([28.8863645, 78.7389607]),
    //   L.marker([28.86949389, 78.76051639]),
    //   L.marker([28.769817, 77.8173757])
    // ];
    // this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
    // this.generateData();
    // this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
    this.initColumn();
    this.initDonut();
    this.initColumn2();
    this.initDonut2();
    }

  initColumn() {
    const column = new Chart({
      chart: {
        type: 'column'
      },

      credits: {
        enabled: false
      },

      series: [{
        name: 'Line 1',
        color: 'white',
        data: [1, 52, 123, 90, 24, 67, 77],
        type: undefined
      }]
    });
    column.addPoint(12);
    this.columnChart = column;
    column.ref$.subscribe(console.log);
  }
  initDonut() {
    const donut = new Chart({
      chart: {
        style:{
          color: "white",
        },
        backgroundColor: '#3e475b',
     polar: true,
     type: 'line',
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
          style: {
        color: '#ffffff',
          font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
       },
        text: this.chartData.center,
        align: 'center',
        verticalAlign: 'middle',
        y: -5
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: -180,
          center: ['50%', '50%'],
          size: '90%',
          showInLegend: true,
          color: "white",
        }
      },
      series: [
        {
          name: 'DISCOM',
          color: "white",
          data: [

            {
              name: 'Up Substation',
              color: 'green',
              y: this.chartData.side1
            },
            {
              name: 'Down Substation',
              color: 'red',
              y: this.chartData.side2,
            }, {
              name: 'Offline ',
              color:'yellow',
              y: 10.67
            },
           ],
          type: 'pie',
          innerSize: '50%',

        }]
    });
    this.donutChart = donut;
  }
  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  generateData() {
    const data: any[] = [];
    for (let i = 0; i < 10000; i++) {
      const icon = L.icon({
        iconUrl: "2273e3d8ad9264b7daa5bdbf8e6b47f8.png",
        shadowUrl: "44a526eed258222515aa21eaffd14a96.png"
      });

      data.push(L.marker([this.generateLon(), this.generateLat()]));
    }

    this.markerClusterData = data;
  }
  initColumn2() {
    const column2 = new Chart({
      chart: {
        type: 'column'
      },

      credits: {
        enabled: false
      },

      series: [{
        name: 'Line 1',
        color: 'white',
        data: [1, 52, 123, 90, 24, 67, 77],
        type: undefined
      }]
    });
    column2.addPoint(12);
    this.columnChart2 = column2;
    column2.ref$.subscribe(console.log);
  }
  initDonut2() {
    const donut2 = new Chart({
      chart: {
        style:{
          color: "white",
        },
        backgroundColor: '#3e475b',
     polar: true,
     type: 'line',
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
          style: {
        color: '#ffffff',
          font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
       },
        text: this.chartData.center,
        align: 'center',
        verticalAlign: 'middle',
        y: -5
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: -180,
          center: ['50%', '50%'],
          size: '90%',
          showInLegend: true,
          color: "white",
        }
      },
      series: [
        {
          name: 'DISCOMM',
          color: "white",
          data: [

            {
              name: 'Up Substation',
              color:'green',
              y: this.chartData.side1
            },
            {
              name: 'Down Substations',
              color:'red',
              y: this.chartData.side2,
            }, {
              name: 'Offline',
              color:'yellow',
              y: 4.67
            },
           ],
          type: 'pie',
          innerSize: '50%',

        }]
    });
    this.donutChart2 = donut2;
  }
  selected:any="All";
  selected1:any="All";
  zoom: number = 8;

  // initial center position for the map
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
    console.log(this.markers);
  }
  minClusterSize = 50;



  clickedMarker(lt, lng) {
    this.markers.push({
      lat: lt+0.1,
      lng: lng+0.2,
      draggable: false
    });
    this.markers.push({
      lat: lt+0.2,
      lng: lng+0.1,
      draggable: false
    });
    this.markers.push({
      lat: lt+0.3,
      lng: lng+0.1,
      draggable: false
    });

  }



  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [

   {lat: 51.723858, lng: 7.895982, label: 'C', draggable: false},
 {lat: 27.0984425940041, lng: 81.23188744659423,label: 'C', draggable: false},
 {lat: 27.14068859704565, lng: 80.95722924346923,label: 'C', draggable: false},
 {lat: 27.008626475498637, lng: 81.03413354034423,label: 'C', draggable: false},
 {lat: 26.85680806735474, lng: 80.80891381378173,label: 'C', draggable: false},
 {lat: 27.023307724979674, lng: 80.62214623565673,label: 'C', draggable: false},

 {lat: 26.66552108068489, lng: 80.92427025909423,label: 'C', draggable: false},
{lat: 26.65570281830224, lng: 80.22114525909423,label: 'C', draggable: false},
 {lat: 26.734225249446762, lng: 80.60566674346923,label: 'C', draggable: false},
 {lat: 26.660612055086595, lng: 80.45185814971923,label: 'C', draggable: false},
{lat: 26.434569023865162, lng: 80.62214623565673,label: 'C', draggable: false},
 {lat: 26.513243207026836, lng: 80.85835229034423, label: 'C',draggable: false},
    {
		  lat: 24.8468,
		  lng: 80.9462,
		  label: 'A',
		  draggable: false
	  },
    {
		  lat: 23.8478,
		  lng: 80.9487,
		  label: 'A',
		  draggable: false
	  },
    {
		  lat: 22.8489,
		  lng: 80.9490,
		  label: {
        color: 'black',
        text: 'Marker label ',
      },
		  draggable: false
	  },

{
		  lat: 21.8478,
		  lng: 80.9499,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 20.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: false
	  },
    // repeat
      {
		  lat: 19.673800,
		  lng: 7.815900,
		  label: 'A',
		  draggable: false
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: false
	  }
  ]

  toggleCluster(){
 this.minClusterSize = (this.minClusterSize<5)?50:2;
 console.log('toggleCluster  minClusterSize = '+this.minClusterSize);
  }

 
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })
  };

  setValue(value){
    switch(value){
      case '1':{
       this.chartData.center=34526;
       this.chartData.side1=30.66;
       this.chartData.side2=45.55;
       this.map.setView(new L.LatLng(26.8467, 80.9462),8);
       this.markerClusterData= [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
       L.marker([29.62132417, 78.36183222])];
       this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
       this.initColumn();
       this.initDonut();
        break;
      }
      case '2':{
        this.chartData.center=55526;
       this.chartData.side1=57.66;
       this.chartData.side2=35.55;
       this.map.setView(new L.LatLng(28.7041, 77.1025),8);
       this.zoom=7;
       this.initColumn();
       this.initDonut();
        break;
      }
      case '3':{
        this.chartData.center=66666;
       this.chartData.side1=10.66;
       this.chartData.side2=65.55;
       this.map.setView(new L.LatLng(28.7041, 77.1025),4);
       this.initColumn();
       this.initDonut();
        break;
      }
      default:{
        this.chartData.center=6544;
       this.chartData.side1=70.66;
       this.chartData.side2=25.55;
       this.zoom=5;
       this.initColumn();
       this.initDonut();
        break;
      }
    }
  }
  changeZone(value){








// @ts-ignore
    // tslint:disable-next-line:triple-equals
    if( value == 'up' ){

  // this.map.setView(new L.LatLng(26.8467, 80.9462),8);
      this.map.setView(new L.LatLng(29.62132417, 78.36183222), 8);
  // this.markerClusterData= [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
  //   L.marker([29.62132417, 78.36183222])];

  this.markerClusterData = [L.marker([29.595, 77.178]),
    L.marker([28.64310306, 77.38003389]),
    L.marker([29.62132417, 78.36183222]),
      L.marker([29.96835694, 77.53508917]),
      L.marker([28.66581861, 77.36675778]),
      L.marker([28.64616417, 77.33923944]),
      L.marker([28.1341873, 77.9163238]),
      L.marker([28.76006, 77.3007]),
      L.marker([28.74036611, 77.2885375]),
      L.marker([28.70216194, 77.49487361]),
      L.marker([28.3931314, 78.0184372]),
      L.marker([28.65561056, 77.48569861]),
      L.marker([28.65296139, 77.46573583]),
      L.marker([28.64399361, 77.41565528]),
      L.marker([28.612751, 78.610353]),
      L.marker([28.659, 77.43]),
      L.marker([28.681, 77.534]),
      L.marker([28.687, 77.528]),
      L.marker([28.73807278, 77.27164417]),
      L.marker([28.69234694, 77.33690833]),
      L.marker([28.641, 77.433]),
      L.marker([28.82, 77.598]),
      L.marker([29.47657167, 77.71318556]),
      L.marker([28.776, 77.517]),
      L.marker([28.69252417, 77.48285417]),
      L.marker([29.018512, 77.764029]),
      L.marker([28.74, 77.482]),
      L.marker([28.65452278, 77.44963028]),
      L.marker([29.06368667, 77.28865167]),
      L.marker([28.73373389, 77.32263139]),
      L.marker([28.63290389, 77.35985722]),
      L.marker([28.678655, 77.45524806]),
      L.marker([28.68714306, 77.39181389]),
      L.marker([28.6413425, 77.31925694]),
      L.marker([28.665, 77.445]),
      L.marker([28.664, 77.452]),
      L.marker([28.705, 77.33]),
      L.marker([28.2654462, 78.3146959]),
      L.marker([28.68294, 77.3705375]),
      L.marker([28.6366525, 77.45768056]),
      L.marker([28.9047599, 78.0125818]),
      L.marker([28.92917861, 77.73691306]),
      L.marker([28.3925999, 78.0197171]),
      L.marker([28.6691635, 77.4537508]),
      L.marker([29.09929472, 77.90690361]),
      L.marker([28.818, 77.56]),
      L.marker([28.68417111, 77.38563028]),
      L.marker([28.7105975, 77.45415917]),
      L.marker([29.64307523, 77.26672971]),
      L.marker([28.736393, 77.297011]),
      L.marker([28.72301944, 77.34444111]),
      L.marker([29.2811593, 77.2775098]),
      L.marker([28.662, 77.44]),
      L.marker([28.66763028, 77.4142125]),
      L.marker([28.95555417, 77.75502278]),
      L.marker([28.64380361, 77.37324806]),
      L.marker([28.790716, 77.6269425]),
      L.marker([29.559921, 77.249098]),
      L.marker([28.83161389, 77.56755694]),
      L.marker([28.98118667, 77.69984556]),
      L.marker([28.93299083, 77.66058833]),
      L.marker([28.8777505, 77.5268457]),
      L.marker([28.781084, 77.278156]),
      L.marker([28.65178083, 77.41117472]),
      L.marker([28.67363278, 77.44209278]),
      L.marker([28.68470833, 77.34603528]),
      L.marker([28.77185, 77.260342]),
      L.marker([28.765566, 77.2784]),
      L.marker([28.63968306, 77.43731778]),
      L.marker([28.81682194, 79.01747639]),
      L.marker([28.2450299, 78.1872579]),
      L.marker([28.67265833, 77.42831]),
      L.marker([28.70198806, 77.46319]),
      L.marker([28.64892, 77.35560306]),
      L.marker([28.563938, 77.367794]),
      L.marker([28.79880815, 78.7643005]),
      L.marker([28.68967944, 77.33995417]),
      L.marker([28.96218583, 77.73623611]),
      L.marker([28.672, 77.465]),
      L.marker([28.63425972, 77.37330083]),
      L.marker([28.66365417, 77.4067675]),
      L.marker([28.75707111, 77.32042444]),
      L.marker([28.63860389, 77.43706972]),
      L.marker([28.60864917, 77.34966778]),
      L.marker([28.66865194, 77.33176417]),
      L.marker([28.783167, 77.253139]),
      L.marker([28.67509583, 77.49316278]),
      L.marker([28.2592839, 78.1772842]),
      L.marker([28.63690056, 77.334095]),
      L.marker([29.271027, 77.518504]),
      L.marker([28.66, 77.356]),
      ];

      this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});

// tslint:disable-next-line:triple-equals
}else if (value == 'delhi'){
  // this.map.setView(new L.LatLng(28.1246372, 77.5680766),8);
  this.map.setView(new L.LatLng(28.57779417, 78.5814325),8);

  // this.markerClusterData= [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
  // L.marker([29.62132417, 78.36183222])];
  this.markerClusterData = [L.marker([28.53995861, 77.41299583]),
    L.marker([28.84358917, 78.76664278]),
    L.marker([29.2999509, 77.3416606]),
    L.marker([28.57779417, 78.5814325]),
    L.marker([28.1750664, 77.7042498]),
    L.marker([28.1246372, 77.5680766]),
    L.marker([28.801363, 79.202287]),
    L.marker([29.2811593, 77.2775098]),
    L.marker([29.58162706, 77.39006033]),
    L.marker([28.81109417, 79.02258556]),
    L.marker([29.4208324, 77.5020449]),
    L.marker([28.62362417, 77.36423333]),
    L.marker([28.58678389, 77.32367306]),
    L.marker([28.65978361, 77.35651028]),
    L.marker([28.64892, 77.35560306]),
    L.marker([28.611, 77.366]),
    L.marker([28.56513361, 77.39422444]),
    L.marker([28.61842611, 77.36424472]),
    L.marker([28.62262139, 77.38820472])
    ];

  this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});

// this.generateData();
}else if( value == 'all' ){
  //this.map.setView(new L.LatLng(28.7041, 77.1025),4);
      this.map.setView(new L.LatLng(29.62132417, 78.36183222), 8);
  // this.markerClusterData= [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
  // L.marker([29.62132417, 78.36183222])];

  this.markerClusterData = [L.marker([28.53995861, 77.41299583]),L.marker([29.595, 77.178]),
    // tslint:disable-next-line:max-line-length
    L.marker([29.62132417, 78.36183222]), L.marker([28.1341873, 77.9163238]), L.marker([28.76006, 77.3007]), L.marker([28.5037164, 77.9499735]), L.marker([29.38693167, 78.12311806]), L.marker([28.83342363, 78.7358805]), L.marker([28.2729063, 78.4190023]), L.marker([28.53995861, 77.41299583]), L.marker([29.595, 77.178]), L.marker([29.46445722, 77.31156278]), L.marker([29.6035732, 78.3406217]),
    L.marker([29.3894845, 78.6783923]),
    L.marker([28.64310306, 77.38003389]),
    L.marker([28.910845, 78.50153222]),
    L.marker([29.271, 77.295]),
    L.marker([28.77208306, 79.02554583]),
    L.marker([29.62132417, 78.36183222]),
    L.marker([29.01674528, 77.76305083]),
    L.marker([29.96835694, 77.53508917]),
    L.marker([28.47101062, 79.04360572]),
    L.marker([29.862, 77.33]),
    L.marker([28.66581861, 77.36675778]),
    L.marker([28.985, 77.398]),
    L.marker([28.72085417, 77.74146614]),
    L.marker([28.64616417, 77.33923944]),
    L.marker([28.40987556, 77.87593806]),
    L.marker([29.49032833, 77.43014333]),
    L.marker([29.6830462, 77.6902955]),
    L.marker([29.499, 78.506]),
    L.marker([28.94395417, 77.21374472]),
    L.marker([29.7017882, 78.2591665]),
    L.marker([28.3994511, 78.6363572]),
    L.marker([28.38654417, 77.83175167]),
    L.marker([28.74036611, 77.2885375]),
    L.marker([29.4367407, 77.2974396]),
    L.marker([28.70216194, 77.49487361]),
    L.marker([29.09026, 77.25812]),
    L.marker([28.3931314, 78.0184372]),
    L.marker([28.99527139, 77.70522139]),
    L.marker([30.183, 77.615]),
    L.marker([29.197241, 77.967072]),
    L.marker([28.65561056, 77.48569861]),
    L.marker([29.4771338, 78.659909]),
    L.marker([29.7042245, 77.4850748]),
    L.marker([28.61799, 78.80944]),
    L.marker([28.81608833, 79.0471225]),
    L.marker([28.65296139, 77.46573583]),
    L.marker([29.29038, 77.474267]),
    L.marker([28.6718352, 78.1045899]),
    L.marker([29.38032056, 78.14400917]),
    L.marker([28.26229833, 77.85839306]),
    L.marker([28.46150806, 78.785625]),
    L.marker([28.3731579, 78.0817162]),
    L.marker([28.64399361, 77.41565528]),
    L.marker([29.546, 77.585]),
    L.marker([29.2009315, 77.1796122]),
    L.marker([30.068, 77.468]),
    L.marker([28.612751, 78.610353]),
    L.marker([28.57487639, 78.56551611]),
    L.marker([28.659, 77.43]),
    L.marker([28.98863972, 77.71809028]),
    L.marker([28.77723944, 79.02817694]),
    L.marker([28.84358917, 78.76664278]),
    L.marker([29.2999509, 77.3416606]),
    L.marker([28.681, 77.534]),
    L.marker([28.9565769, 77.3376471]),
    L.marker([29.113584, 77.708806]),
    L.marker([28.687, 77.528]),
    L.marker([29.8464198, 77.3726572]),
    L.marker([29.02276528, 77.67291333]),
    L.marker([28.72952444, 77.77236611]),
    L.marker([28.67, 77.439]),
    L.marker([29.3053814, 78.4978501]),
    L.marker([28.9668249, 78.2588274]),
    L.marker([28.15005, 78.2612]),
    L.marker([28.7690043, 77.7668849]),
    L.marker([28.57779417, 78.5814325]),
    L.marker([28.22553583, 78.20996917]),
    L.marker([28.951613, 79.351714]),
    L.marker([28.73807278, 77.27164417]),
    L.marker([28.82594611, 79.03432361]),
    L.marker([28.91003556, 78.45190361]),
    L.marker([28.69234694, 77.33690833]),
    L.marker([28.838, 78.83]),
    L.marker([28.641, 77.433]),
    L.marker([28.82, 77.598]),
    L.marker([29.150488, 77.821221]),
    L.marker([28.83120222, 78.24470944]),
    L.marker([28.82957921, 78.78226245]),
    L.marker([29.47657167, 77.71318556]),
    L.marker([28.776, 77.517]),
    L.marker([29.2022425, 77.3308271]),
    L.marker([29.5433768, 77.3038157]),
    L.marker([29.9639525, 77.54774472]),
    L.marker([28.98009278, 77.69731]),
    L.marker([28.83512278, 78.78892417]),
    L.marker([28.48634806, 77.65638139]),
    L.marker([28.69252417, 77.48285417]),
    L.marker([29.018512, 77.764029]),
    L.marker([28.74, 77.482]),
    L.marker([28.82168821, 78.7948512]),
    L.marker([28.5373842, 77.76594766]),
    L.marker([28.89794972, 78.44397]),
    L.marker([28.65452278, 77.44963028]),
    L.marker([28.2401488, 78.4351312]),
    L.marker([29.94469833, 77.55209472]),
    L.marker([29.2404344, 78.2089832]),
    L.marker([28.46156528, 78.78553444]),
    L.marker([28.95611444, 77.71973778]),
    L.marker([29.15865, 77.98173]),
    L.marker([28.55575028, 78.57125]),
    L.marker([29.06368667, 77.28865167]),
    L.marker([28.53396056, 77.41430028]),
    L.marker([29.98468778, 77.5570475]),
    L.marker([28.39269833, 77.85341417]),
    L.marker([28.73373389, 77.32263139]),
    L.marker([29.4683152, 77.3576195]),
    L.marker([28.790716, 77.6269425]),
    L.marker([28.95594833, 77.74191833]),
    L.marker([28.1750664, 77.7042498]),
    L.marker([29.989325, 77.53668889]),
    L.marker([29.6609326, 77.4606734]),
    L.marker([29.96281583, 77.55712667]),
    L.marker([28.4776634, 78.7315015]),
    L.marker([29.327, 77.862]),
    L.marker([28.1246372, 77.5680766]),
    L.marker([29.33609, 78.22608]),
    L.marker([28.39679667, 78.09334389]),
    L.marker([29.5016852, 77.2906173]),
    L.marker([28.85256911, 78.77171061]),
    L.marker([28.47253333, 77.65393417]),
    L.marker([29.251298, 77.272662]),
    L.marker([28.63290389, 77.35985722]),
    L.marker([28.23351222, 77.87476333]),
    L.marker([28.678655, 77.45524806]),
    L.marker([29.32666194, 77.26558583]),
    L.marker([29.02762833, 77.68292472]),
    L.marker([29.062, 78.62]),
    L.marker([28.68714306, 77.39181389]),
    L.marker([29.1026506, 77.5184509]),
    L.marker([29.453, 77.255]),
    L.marker([28.82631361, 78.79639306]),
    L.marker([28.6413425, 77.31925694]),
    L.marker([28.665, 77.445]),
    L.marker([28.664, 77.452]),
    L.marker([28.801363, 79.202287]),
    L.marker([28.98682389, 77.65665222]),
    L.marker([29.2712756, 77.7296493]),
    L.marker([28.8290998, 77.740022]),
    L.marker([28.8567, 77.7125]),
    L.marker([28.5205241, 78.6859955]),
    L.marker([28.6931801, 77.6423367]),
    L.marker([29.4387388, 77.2914705]),
    L.marker([29.5146825, 78.21527361]),
    L.marker([28.868996, 77.918562]),
    L.marker([29.09761333, 77.25026111]),
    L.marker([28.705, 77.33]),
    L.marker([28.2654462, 78.3146959]),
    L.marker([28.687, 78.788]),
    L.marker([28.94516694, 77.72392667]),
    L.marker([28.98401639, 77.70530472]),
    L.marker([28.68294, 77.3705375]),
    L.marker([28.6366525, 77.45768056]),
    L.marker([28.9047599, 78.0125818]),
    L.marker([29.98099, 77.791835]),
    L.marker([28.9699725, 77.70617444]),
    L.marker([28.84356472, 78.75604472]),
    L.marker([28.92917861, 77.73691306]),
    L.marker([28.95863861, 77.69163917]),
    L.marker([28.3925999, 78.0197171]),
    L.marker([29.46553667, 77.70395361]),
    L.marker([28.9705061, 77.6589894]),
    L.marker([28.3328047, 77.8613603]),
    L.marker([29.963681, 77.519125]),
    L.marker([29.48655, 78.12732]),
    L.marker([29.47044222, 77.72279694]),
    L.marker([28.6691635, 77.4537508]),
    L.marker([28.96558806, 77.73894556]),
    L.marker([29.3814044, 78.7649791]),
    L.marker([29.099, 79.077]),
    L.marker([29.099, 77.907]),
    L.marker([28.95026006, 77.76220128]),
    L.marker([28.95553611, 77.75500417]),
    L.marker([29.09929472, 77.90690361]),
    L.marker([29.01338583, 77.70462278]),
    L.marker([28.616339, 79.168802]),
    L.marker([29.48543861, 77.6834425]),
    L.marker([28.73935278, 77.75250028]),
    L.marker([28.818, 77.56]),
    L.marker([28.68417111, 77.38563028]),
    L.marker([28.97886944, 77.71835556]),
    L.marker([28.95123333, 77.67548083]),
    L.marker([28.7105975, 77.45415917]),
    L.marker([29.64307523, 77.26672971]),
    L.marker([29.435635, 78.42575]),
    L.marker([28.736393, 77.297011]),
    L.marker([28.72301944, 77.34444111]),
    L.marker([29.65295, 78.46682]),
    L.marker([29.915, 77.306]),
    L.marker([29.2811593, 77.2775098]),
    L.marker([29.718, 77.417]),
    L.marker([29.107191, 77.593782]),
    L.marker([28.1893525, 78.3893775]),
    L.marker([28.96630611, 77.71811278]),
    L.marker([28.997, 78.407]),
    L.marker([28.662, 77.44]),
    L.marker([29.194801, 78.224801]),
    L.marker([28.66763028, 77.4142125]),
    L.marker([28.87158333, 78.46836139]),
    L.marker([28.95555417, 77.75502278]),
    L.marker([28.64380361, 77.37324806]),
    L.marker([29.559921, 77.249098]),
    L.marker([28.7413448, 77.5485133]),
    L.marker([29.58162706, 77.39006033]),
    L.marker([29.4587125, 77.70057028]),
    L.marker([28.40412528, 77.85715111]),
    L.marker([28.83161389, 77.56755694]),
    L.marker([28.98118667, 77.69984556]),
    L.marker([29.476714, 77.7129633]),
    L.marker([29.05496, 77.71085389]),
    L.marker([28.4622489, 79.215627]),
    L.marker([28.98731, 77.93744]),
    L.marker([28.93299083, 77.66058833]),
    L.marker([28.8777505, 77.5268457]),
    L.marker([28.781084, 77.278156]),
    L.marker([28.4518691, 78.2189539]),
    L.marker([28.884437, 77.7709558]),
    L.marker([29.192, 77.832]),
    L.marker([28.5399575, 77.41289167]),
    L.marker([28.71014528, 77.66983472]),
    L.marker([28.81831222, 78.79402167]),
    L.marker([28.45661306, 78.79069611]),
    L.marker([28.65178083, 77.41117472]),
    L.marker([28.65138556, 77.411155]),
    L.marker([28.85164915, 78.75917152]),
    L.marker([29.97643333, 77.54948722]),
    L.marker([29.65909513, 77.84124679]),
    L.marker([28.81109417, 79.02258556]),
    L.marker([28.9619225, 77.5115989]),
    L.marker([28.5983975, 78.57356722]),
    L.marker([28.67363278, 77.44209278]),
    L.marker([28.68470833, 77.34603528]),
    L.marker([28.3375969, 78.3872445]),
    L.marker([28.77185, 77.260342]),
    L.marker([28.765566, 77.2784]),
    L.marker([28.96229306, 77.68607278]),
    L.marker([29.333166, 77.30885]),
    L.marker([28.71071806, 77.77237528]),
    L.marker([28.96216194, 77.73621528]),
    L.marker([29.51416622, 77.81859928]),
    L.marker([28.63968306, 77.43731778]),
    L.marker([29.189634, 77.893827]),
    L.marker([28.81682194, 79.01747639]),
    L.marker([28.92669, 77.230625]),
    L.marker([28.2450299, 78.1872579]),
    L.marker([29.49423611, 77.69862028]),
    L.marker([28.984755, 77.68768861]),
    L.marker([28.5042442, 77.6913689]),
    L.marker([28.6115015, 78.1412996]),
    L.marker([29.1727749, 77.1842822]),
    L.marker([28.99525472, 77.696815]),
    L.marker([29.115, 78.608]),
    L.marker([28.799, 78.765]),
    L.marker([29.3613052, 77.5578221]),
    L.marker([28.98229111, 77.72714111]),
    L.marker([28.58440028, 78.5795425]),
    L.marker([30.0498632, 77.6886667]),
    L.marker([28.67265833, 77.42831]),
    L.marker([28.70198806, 77.46319]),
    L.marker([29.138216, 77.613461]),
    L.marker([30.0152921, 77.4096234]),
    L.marker([29.4208324, 77.5020449]),
    L.marker([28.62362417, 77.36423333]),
    L.marker([28.58678389, 77.32367306]),
    L.marker([28.65978361, 77.35651028]),
    L.marker([28.64892, 77.35560306]),
    L.marker([28.611, 77.366]),
    L.marker([28.56513361, 77.39422444]),
    L.marker([28.61842611, 77.36424472]),
    L.marker([28.62262139, 77.38820472]),
    L.marker([28.563938, 77.367794]),
    L.marker([29.2058595, 78.5778689]),
    L.marker([28.79777778, 79.02239083]),
    L.marker([28.79880815, 78.7643005]),
    L.marker([28.68967944, 77.33995417]),
    L.marker([28.97176389, 77.69360083]),
    L.marker([28.96218583, 77.73623611]),
    L.marker([28.672, 77.465]),
    L.marker([28.93209444, 77.67379472]),
    L.marker([29.33851556, 78.5741825]),
    L.marker([28.2728923, 78.0086573]),
    L.marker([28.63425972, 77.37330083]),
    L.marker([28.82097583, 78.77991389]),
    L.marker([28.9714987, 77.8295809]),
    L.marker([28.66365417, 77.4067675]),
    L.marker([28.75707111, 77.32042444]),
    L.marker([28.63464, 78.6323]),
    L.marker([29.4145894, 77.475589]),
    L.marker([29.5488082, 78.3393907]),
    L.marker([28.63860389, 77.43706972]),
    L.marker([29.94477528, 77.55196611]),
    L.marker([28.24073806, 77.86232306]),
    L.marker([29.093, 77.918]),
    L.marker([28.60864917, 77.34966778]),
    L.marker([28.66865194, 77.33176417]),
    L.marker([29.025, 79.057]),
    L.marker([28.73231722, 77.81151472]),
    L.marker([28.563907, 79.009246]),
    L.marker([28.9498607, 77.2644047]),
    L.marker([28.8298375, 78.76852]),
    L.marker([28.87993681, 78.75107591]),
    L.marker([29.6689829, 77.3208614]),
    L.marker([28.45590083, 78.79462306]),
    L.marker([29.71196306, 77.67020778]),
    L.marker([28.72682278, 78.27309278]),
    L.marker([29.151188, 77.612319]),
    L.marker([28.2371848, 77.7346569]),
    L.marker([29.18509583, 78.86216556]),
    L.marker([29.61964182, 77.47252161]),
    L.marker([29.1161382, 78.5018205]),
    L.marker([28.824, 78.736]),
    L.marker([28.83695411, 78.77461112]),
    L.marker([29.96933528, 77.58477778]),
    L.marker([28.80126778, 78.76366389]),
    L.marker([29.46983472, 77.74975389]),
    L.marker([28.783167, 77.253139]),
    L.marker([28.67509583, 77.49316278]),
    L.marker([28.9204925, 77.65347972]),
    L.marker([28.649, 78.357]),
    L.marker([29.223637, 78.450301]),
    L.marker([28.9769275, 77.73290278]),
    L.marker([28.979987, 77.21302]),
    L.marker([28.2592839, 78.1772842]),
    L.marker([28.63690056, 77.334095]),
    L.marker([29.271027, 77.518504]),
    L.marker([28.66, 77.356]),
    L.marker([28.96614028, 77.70909417]),
    L.marker([28.8863645, 78.7389607]),
    L.marker([28.86949389, 78.76051639]),
    L.marker([28.769817, 77.8173757])
  ];

  this.markerClusterGroup = L.markerClusterGroup({removeOutsideVisibleBounds: true});
}
  }
  onMapReady(map: L.Map) {
    this.map = map;
    // Do stuff with map
  }
}
