import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as faker from 'faker';
const prisma = new PrismaClient();
const fakerRounds = 40;

const main = async (): Promise<number> => {
  dotenv.config();

  await prisma.orders.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.store.deleteMany();
  for (let i = 0; i <= fakerRounds; i++) {
    await seedStore();
  }
  for (let i = 0; i <= fakerRounds; i++) {
    await seedCategory();
  }
  for (let i = 0; i <= fakerRounds; i++) {
    await seedProduct();
  }
  for (let i = 0; i <= fakerRounds; i++) {
    await seedUser();
  }
  for (let i = 0; i <= fakerRounds; i++) {
    await seedOrders();
  }
  return fakerRounds;
};

/// User
const seedUser = async () => {
  const stores = await prisma.store.findMany();
  try {
    await prisma.user.create({
      data: {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.random.arrayElement(['ADMIN', 'USER']),
        storeId: faker.random.arrayElement(stores).id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/// Store
const seedStore = async () => {
  try {
    await prisma.store.create({
      data: {
        name: faker.company.companyName(),
        description: faker.company.catchPhraseDescriptor(),
        address: faker.address.streetAddress(),
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/// Category
const seedCategory = async () => {
  try {
    await prisma.category.create({
      data: {
        name: faker.commerce.productMaterial(),
        description: faker.commerce.productDescription(),
        mediaUrl: [
          faker.image.imageUrl(),
          faker.image.imageUrl(),
          faker.image.imageUrl(),
        ],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/// Product
const seedProduct = async () => {
  try {
    const stores = await prisma.store.findMany();
    const categories = await prisma.category.findMany();
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: +faker.commerce.price(),
        discount: faker.datatype.number({ min: 4, max: 30 }),
        mediaUrl: [
          faker.image.imageUrl(),
          faker.image.imageUrl(),
          faker.image.imageUrl(),
        ],
        categoryId: faker.random.arrayElement(categories).id,
        storeId: faker.random.arrayElement(stores).id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const seedOrders = async () => {
  const users = await prisma.user.findMany();
  const products = await prisma.product.findMany();
  await prisma.orders.create({
    data: {
      userId: faker.random.arrayElement(users).id,
      productId: faker.random.arrayElement(products).id,
    },
  });
};
main()
  .then((e) => {
    console.log(e);
  })
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
