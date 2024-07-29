import { NextRequest } from 'next/server';

const mock = {
  id: 3,
  avatar: 'girl1.webp',
  name: 'Clementine Bauch',
  description:
    'Crafting brand communication strategies, creating visual designs, leading art direction, and capturing portraits through photography',
  username: 'clembdesign',
  email: 'clementine@bauch.net',
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157',
    geo: {
      lat: '-68.6102',
      lng: '-47.0653',
    },
  },
  phone: '1-463-123-4447',
  website: 'clem.info',
  social: [
    {
      name: 'facebook',
      url: 'https://example.com/',
    },
    {
      name: 'linkedin',
      url: 'https://example.com/',
    },
    {
      name: 'x',
      url: 'https://example.com/',
    },
    {
      name: 'instagram',
      url: 'https://example.com/',
    },
    {
      name: 'dribble',
      url: 'https://example.com/',
    },
  ],
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications',
  },
};

export async function GET() {
  // Slow data to show Skeletons
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return Response.json({
    ...mock,
    followed: false,
  });
}

export async function PUT() {
  return Response.json({
    ...mock,
    followed: true,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (body.message) {
    return Response.json({});
  }
}
