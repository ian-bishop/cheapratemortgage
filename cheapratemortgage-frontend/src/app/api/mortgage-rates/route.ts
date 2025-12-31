import { NextResponse } from 'next/server';
import { fetchMortgageRates } from '@/lib/fred-api';

export const revalidate = 21600; // Cache for 6 hours (data updates weekly on Thursdays)

export async function GET() {
  try {
    const data = await fetchMortgageRates();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch mortgage rates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mortgage rates' },
      { status: 500 }
    );
  }
}
