import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react';
import { Modal, ModalFooter } from '~/atoms/Modal';
import { Button } from '~/atoms';
import ModalInner from '~/atoms/Modal/ModalInner';
import { Input } from '~/atoms/Input';
import { usePostMessage } from '~/challenges/01-profile-card/hooks/usePostMessage';

type Props = {
  close: () => void;
};

type ModalProps = ComponentPropsWithoutRef<'div'> & Props;

const ModalMessage = ({ close }: ModalProps) => {
  const [message, setMessage] = useState('');

  const { mutate, isPending } = usePostMessage();

  const sendMessage = () => {
    mutate(
      { message },
      {
        onSuccess: () => {
          return close();
        },
      }
    );
  };

  return (
    <Modal title='Send a message' close={close}>
      <ModalInner>
        <Input
          as='textarea'
          className='my-2'
          value={message}
          errorMessage={
            message === '' ? 'This message field is required' : undefined
          }
          onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(target.value)
          }
        >
          Type your message
        </Input>
      </ModalInner>
      <ModalFooter>
        <Button
          color='primary'
          roundedFull
          minWidth
          disabled={message === ''}
          loading={isPending}
          onClick={sendMessage}
        >
          Send
        </Button>
        <Button outline roundedFull minWidth onClick={close}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalMessage;
