import { NextResponse } from 'next/server';

export async function GET() {
  const response = new NextResponse(
    new ReadableStream({
      start(controller) {
        const timer = setInterval(() => {
          controller.enqueue(`data: ${Date.now()}\n\n`);
        }, 1000);
        
        const cleanup = () => {
          console.log('Clearing SSE interval');
          clearInterval(timer);
        };

        controller.signal.addEventListener('abort', cleanup);
        return cleanup;

      }
    })
  );
  
  response.headers.set('Content-Type', 'text/event-stream');
  return response;
}