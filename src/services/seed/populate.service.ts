import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const generateUsers = async () => {
  const usersData = [
    {
      id: 1,
      name: "Julia Martínez",
      email: "user1@example.com",
      password: "password1",
      photo:
        "https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=sph",
      phone: "+1 244 40-2213",
      user_color: "#654321",
    },
    {
      id: 2,
      name: "Kim Hyung",
      email: "user2@example.com",
      password: "password2",
      photo:
        "https://img.freepik.com/fotos-gratis/confiante-atraente-e-extrovertida-mulher-asiatica-em-um-top-amarelo-sorrindo-amigavel-e-feliz-enquanto-cruza-as-maos-no-peito-posando-sobre-um-fundo-branco-autoconfiante-pose-atrevida-parece-determinado_176420-36757.jpg",
      phone: "+1 305 55-2001",
      user_color: "#B2FFFF",
    },

    {
      id: 3,
      name: "Mark Green",
      email: "user3@example.com",
      password: "password3",
      photo:
        "https://img.freepik.com/fotos-gratis/homem-bonito-sentado-em-uma-pedra_144627-1676.jpg",
      phone: "+1 211 80-4551",
      user_color: "#006400",
    },
  ];
  const commentsData = [
    {
      content:
        "This place is amazing! The food is so delicious, and the atmosphere is cozy. I'll definitely come back!",
    },
    {
      content:
        "I had a great time at JohnRestaurant. The staff was friendly, and the menu had excellent choices!",
    },
    {
      content:
        "JohnRestaurant exceeded my expectations! The flavors in every dish were fantastic. Highly recommended!",
    },
  ];

  for (let i = 0; i < usersData.length; i++) {
    const userData = usersData[i];
    const commentData = commentsData[i];

    const user = await prisma.users.create({
      data: {
        ...userData,
      },
    });

    const comment = await prisma.comment.create({
      data: {
        ...commentData,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    console.log(
      `User ${user.name} generated successfully with a comment about JohnRestaurant.`
    );
  }

  await prisma.$disconnect();
};

generateUsers();
