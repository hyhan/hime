import { prisma } from '@/lib/prisma';

export async function fetchUsers() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // noStore()
    console.log('Fetching user data...');

    const data = await prisma.user.findMany();

    console.log('Data fetch completed after 3 seconds.', data);

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
