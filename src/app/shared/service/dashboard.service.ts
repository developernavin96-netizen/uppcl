import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDiscoms() {
    return this.http
      .get<any>(environment.apiBaseUrl + '/discomms/api_key')
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getMapDataDiscom(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_discomm`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getZone(data) {
    let discom = data.discom;
    return this.http.get<any>(environment.apiBaseUrl + `/zones/${discom}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getMapDataZone(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_zone`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getMapDataDistrict(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        district:data.district,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_district`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getDistrict(data) {
    let disData = {
      _postdistricts: {
        discomm: data.discom,
        zone: data.zone,
      },
    };

    return this.http
      .post<any>(environment.apiBaseUrl + `/districts`, disData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getCircle(data) {
    let disData = {
      _postcircles: {
        discomm: data.discom,
        zone: data.zone,
        district: data.district,
      },
    };

    return this.http
      .post<any>(environment.apiBaseUrl + `/circles`, disData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
   getMapDataCircle(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        district:data.district,
        circle:data.circle,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_circle`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getDivision(data) {
    let disData = {
      _postdivisions: {
        discomm: data.discom,
        zone: data.zone,
        district: data.district,
        circle: data.circle,
      },
    };

    return this.http
      .post<any>(environment.apiBaseUrl + `/divisions`, disData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getMapDataDivision(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        district:data.district,
        circle:data.circle,
        division:data.division,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_division`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getSubDivision(data) {
    let disData = {
      _postsubdivisions: {
        discomm: data.discom,
        zone: data.zone,
        district: data.district,
        circle: data.circle,
        division: data.division,
      },
    };

    return this.http
      .post<any>(environment.apiBaseUrl + `/subdivisions`, disData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getMapDataSubDivision(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        district:data.district,
        circle:data.circle,
        division:data.division,
        subdivision: data.sub_division,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_subdivision`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
  getSubStation(data) {
    let disData = {
      _postsubstations: {
        discomm: data.discom,
        zone: data.zone,
        district: data.district,
        circle: data.circle,
        division: data.division,
        subdivision: data.sub_division,
        api_key:'x98873np#yi'
      },
    };

    return this.http
      .post<any>(environment.apiBaseUrl + `/substations`, disData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getMapDataSubStation(data){
    let mapData = {
      _postfeeders_discomm: {
        discomm: data.discom,
        zone:data.zone,
        district:data.district,
        circle:data.circle,
        division:data.division,
        subdivision: data.sub_division,
        substation:data.sub_station,
        api_key:'x98873np#yi'
      },
    };
    return this.http
    .post<any>(environment.apiBaseUrl + `/feeders_in_substation`, mapData)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
 get_All_Feeder_Map_data(){
   let key="x98873npyi";
  return this.http.get<any>(environment.apiBaseUrl + `/feeders_discomms/${key}`).pipe(
    map((res) => {
      return res;
    })
  );
 }
}
