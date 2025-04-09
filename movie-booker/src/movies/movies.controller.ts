import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('now-playing')
  @ApiOperation({ summary: 'Get now playing movies' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async getNowPlayingMovies(@Query('page') page: number) {
    return this.moviesService.getNowPlayingMovies(page);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search movies' })
  @ApiQuery({ name: 'query', required: true, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  async searchMovies(@Query('query') query: string, @Query('page') page: number) {
    return this.moviesService.searchMovies(query, page);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie details' })
  @ApiQuery({ name: 'id', required: true, type: String })
  async getMovieDetails(@Query('id') id: string) {
    return this.moviesService.getMovieDetails(id);
  }

  @Get('genres')
  @ApiOperation({ summary: 'Get movie genres' })
  async getGenres() {
    return this.moviesService.getGenres();
  }
}
