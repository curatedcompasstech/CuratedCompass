import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const SCRIPTURL =
  'https://script.google.com/macros/s/AKfycbxkJtN-o4Mc3Kh60zmE5igmj3aZ4AEwvz2sRY4d2cVnZ2-5TYwJ12jH7Igeu2aBhzyY/exec';

@Controller('api')
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Post('submit-form')
  async submitForm(
    @Body() body: unknown,
  ): Promise<{ success: boolean; data?: unknown; error?: string }> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(SCRIPTURL, body, {
          headers: { 'Content-Type': 'application/json' },
        }),
      );
      return { success: true, data: response.data };
    } catch (err: unknown) {
      let errorMessage = 'Unknown error';
      if (
        err &&
        typeof err === 'object' &&
        'message' in err &&
        typeof (err as { message?: unknown }).message === 'string'
      ) {
        errorMessage = (err as { message: string }).message;
      }
      return { success: false, error: errorMessage };
    }
  }
}
