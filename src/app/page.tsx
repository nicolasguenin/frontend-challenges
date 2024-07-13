import Link from 'next/link';
import { Avatar, Button } from '~/atoms';

export default function Home() {
  return (
    <main>
      <Avatar src='/images/avatars/girl1.webp' />
      <div className='flex gap-1 flex-justify-center my-2'>
        <Button as={Link} href='http://example.com' icon='heart'>
          Link
        </Button>
        <Button as={Link} href='http://example.com' icon='arrow-down'>
          Link
        </Button>
        <Button disabled>Disabled</Button>
      </div>
      <Button block icon='arrow-up' loading>
        Block
      </Button>
      <div className='flex gap-1 flex-justify-center my-2'>
        <Button>Neutral</Button>
        <Button color='primary'>Primary</Button>
        <Button color='danger'>Danger</Button>
        <Button color='info'>Info</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
      </div>

      <div className='flex gap-1 flex-justify-center my-2'>
        <Button icon='arrow-up'>Neutral</Button>
        <Button color='primary' icon='arrow-up'>
          Primary
        </Button>
        <Button color='danger' icon='arrow-up'>
          Danger
        </Button>
        <Button color='info' icon='arrow-up'>
          Info
        </Button>
        <Button color='success' icon='arrow-up'>
          Success
        </Button>
        <Button color='warning' icon='arrow-up'>
          Warning
        </Button>
      </div>

      <div className='flex gap-1 flex-justify-center my-2'>
        <Button outline>Neutral</Button>
        <Button outline color='primary'>
          Primary
        </Button>
        <Button outline color='danger'>
          Danger
        </Button>
        <Button outline color='info'>
          Info
        </Button>
        <Button outline color='success'>
          Success
        </Button>
        <Button outline color='warning'>
          Warning
        </Button>
      </div>

      <div className='flex gap-1 flex-justify-center my-2'>
        <Button loading>Download</Button>
        <Button loading color='primary'>
          Download
        </Button>
        <Button loading color='danger'>
          Download
        </Button>
        <Button loading color='info'>
          Download
        </Button>
        <Button loading color='success'>
          Download
        </Button>
        <Button loading color='warning'>
          Download
        </Button>
      </div>

      <div className='flex gap-1 flex-justify-center my-2'>
        <Button loading outline>
          Download
        </Button>
        <Button loading outline color='primary'>
          Download
        </Button>
        <Button loading outline color='danger'>
          Download
        </Button>
        <Button loading outline color='info'>
          Download
        </Button>
        <Button loading outline color='success'>
          Download
        </Button>
        <Button loading outline color='warning'>
          Download
        </Button>
      </div>
    </main>
  );
}
