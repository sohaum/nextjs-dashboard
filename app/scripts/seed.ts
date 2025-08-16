import { seedUsers, seedCustomers, seedInvoices, seedRevenue } from '@/app/seed/route';

async function main() {
  try {
    console.log('Starting database seeding...');
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();
    console.log('Database seeding completed successfully ✅');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    process.exit();
  }
}

main();
