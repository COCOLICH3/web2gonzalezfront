import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Config} from '../models/config';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private title = 'Web Gonzales';
  private color = '#00FF00';
  private $titleBehavior = new BehaviorSubject<string>(this.title);
  private $colorBehavior = new BehaviorSubject<string>(this.color);
  public titleObs = this.$titleBehavior.asObservable();
  public colorObs = this.$colorBehavior.asObservable();

  private baseUrl = environment.apiUrl + '/config';
  private config;

  constructor(private http: HttpClient) {
  }

  updateTitulo(titulo: any) {
    this.$titleBehavior.next(titulo);
  }

  updateColor(color: any) {
    this.$colorBehavior.next(color);
  }

  getConfig(): Observable<Object> {
    return this.http.get(`${this.baseUrl}`);
  }

  saveConfig(title, color): Observable<Object> {
    if(!this.config){
    this.config= new Config();
    this.config.id=0;  
    }
    this.config.title = title;
    this.config.color = color;
    return this.http.post(`${this.baseUrl}`, this.config);
  }

  syncConfig() {
    this.getConfig().subscribe((response: Config) => {
      this.config = response;
      this.updateTitulo(response.title);
      this.updateColor(response.color);
    });
  }
}
