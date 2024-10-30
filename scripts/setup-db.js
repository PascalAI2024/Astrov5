import { setupDatabase } from '../src/lib/db.js';

async function main() {
  try {
    await setupDatabase();
    console.log('✅ Database setup completed successfully');
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

main();