import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('now-playing')
  @ApiOperation({ summary: 'Get now playing movies' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved now playing movies.' })
  async getNowPlayingMovies(@Query('page') page: number) {
    return this.moviesService.getNowPlayingMovies(page);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search movies by query' })
  @ApiQuery({ name: 'query', required: true, type: String, description: 'Search query string' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved search results.' })
  async searchMovies(@Query('query') query: string, @Query('page') page: number) {
    return this.moviesService.searchMovies(query, page);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie details by ID' })
  @ApiQuery({ name: 'id', required: true, type: String, description: 'Movie ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved movie details.' })
  async getMovieDetails(@Query('id') id: string) {
    return this.moviesService.getMovieDetails(id);
  }

  @Get('genres')
  @ApiOperation({ summary: 'Get movie genres' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved movie genres.' })
  async getGenres() {
    return this.moviesService.getGenres();
  }
}
