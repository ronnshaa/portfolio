import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder API response. This will query Supabase for viewpoints within bounds in M5.
  return NextResponse.json({ viewpoints: [] });
}
