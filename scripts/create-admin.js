/* eslint-disable no-console */
import { PrismaClient } from '../src/generated/prisma/client.js';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

function hashPassword(password, rounds = 10) {
  return bcrypt.hashSync(password, rounds);
}

async function createAdmin() {
  const username = process.argv[2] || 'admin';
  const password = process.argv[3] || 'admin123';

  if (!username || !password) {
    console.log('Usage: node scripts/create-admin.js <username> <password>');
    console.log('Example: node scripts/create-admin.js admin mypassword');
    process.exit(1);
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      console.log(`User '${username}' already exists!`);
      process.exit(1);
    }

    // Create admin user
    const hashedPassword = hashPassword(password);
    const user = await prisma.user.create({
      data: {
        id: uuid(),
        username,
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`✅ Admin user created successfully!`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`User ID: ${user.id}`);
    console.log(`\nYou can now login to Oravo with these credentials.`);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
