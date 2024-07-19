import {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

type TransitionProps = ComponentPropsWithoutRef<'div'> & {
  duration?: number;
  name?: string;
  out?: string;
  visible: boolean;
};

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const Transition = ({
  duration = 150,
  name = 'fade',
  out = 'out',
  visible = false,
  className,
  children,
}: TransitionProps) => {
  const childRef = useRef(children);

  const [state, setState] = useState(visible ? VISIBLE : HIDDEN);

  const rootClassName = clsx(className, name, { [out]: state !== VISIBLE });

  if (visible) {
    childRef.current = children;
  }

  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [visible]);

  useEffect(() => {
    if (state === LEAVING) {
      const timeout = setTimeout(() => {
        setState(HIDDEN);
      }, duration);

      return () => clearTimeout(timeout);
    } else if (state === ENTERING) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state, duration]);

  if (state === HIDDEN) {
    return null;
  }

  return <div className={rootClassName}>{childRef.current}</div>;
};

export default Transition;
