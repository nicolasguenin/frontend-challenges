import mock from './mock';

export async function GET() {
  // Emulate filtered data
  const data = mock.map((x) => {
    const {
      description,
      createdAt,
      updatedAt,
      estimatedShippingDate,
      ...rest
    } = x;
    return rest;
  });

  return Response.json(data);
}
