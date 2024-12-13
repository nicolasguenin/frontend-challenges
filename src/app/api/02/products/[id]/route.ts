import mock from '../mock';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (typeof id === 'undefined') {
    return new Response('Bad request', { status: 400 });
  }

  const data = mock.find((x) => x.id === +id);
  if (!data) {
    return new Response('This product id does not exist', { status: 404 });
  }
  return Response.json(data);
}
