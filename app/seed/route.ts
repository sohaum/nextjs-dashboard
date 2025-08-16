import { NextResponse } from 'next/server';
import { seedUsers, seedCustomers, seedInvoices, seedRevenue } from '../../lib/seed-utils';

export async function GET() {
  try {
    console.log('Starting database seeding...');
    
    await seedUsers();
    console.log('Users seeded');
    
    await seedCustomers();
    console.log('Customers seeded');
    
    await seedInvoices();
    console.log('Invoices seeded');
    
    await seedRevenue();
    console.log('Revenue seeded');

    console.log('Database seeding completed successfully');
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Database seeding failed:', error);
    let message = "An unknown error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
