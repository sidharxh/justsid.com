import { site } from '@/lib/site';

// Old follow links now lead to the owner's preferred destination.
export function GET() {
  return Response.redirect(site.linkedin, 308);
}
