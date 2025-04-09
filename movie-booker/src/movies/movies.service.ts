import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MoviesService {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly accessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('TMDB_API_KEY') || 'f10148907106f6c8f26ed680132ad2ca';
    this.baseUrl = this.configService.get<string>('TMDB_BASE_URL') || 'https://api.themoviedb.org/3';
    this.accessToken = this.configService.get<string>('TMDB_ACCESS_TOKEN') || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTAxNDg5MDcxMDZmNmM4ZjI2ZWQ2ODAxMzJhZDJjYSIsIm5iZiI6MTc0NDExOTIxMS44OCwic3ViIjoiNjdmNTI1YWIzMWM5ZjI3Mjk5YWQ1YmYxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HegE36mUrg7WZfRFlJQrZJdl3FijSLt60_A0fbYv8fY';
  }

  async getNowPlayingMovies(page: number = 1): Promise<any> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}`;
    const response = await this.httpService.get(url, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    }).toPromise();
    return this.extractData(response);
  }

  async searchMovies(query: string, page: number = 1): Promise<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`;
    const response = await this.httpService.get(url, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    }).toPromise();
    return this.extractData(response);
  }

  async getMovieDetails(movieId: string): Promise<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    const response = await this.httpService.get(url, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    }).toPromise();
    return this.extractData(response);
  }

  async getGenres(): Promise<any> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    const response = await this.httpService.get(url, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    }).toPromise();
    return this.extractData(response);
  }

  private extractData(response: AxiosResponse<any> | undefined): any {
    if (response) {
      return response.data;
    } else {
      throw new Error('Failed to fetch data from TMDB API');
    }
  }
}
