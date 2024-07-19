import { Symbol } from '~/atoms';
import { useSidebar } from '~/components/navigation/context/SidebarProvider';

const Burger = () => {
  const { displayed, setDisplayed } = useSidebar();

  return (
    <button
      className='absolute burger'
      title='Menu'
      onClick={() => setDisplayed(!displayed)}
    >
      <Symbol name={displayed ? 'hamburger-remove' : 'hamburger'} />
      <span className='visually-hidden'>Menu</span>
    </button>
  );
};

export default Burger;
