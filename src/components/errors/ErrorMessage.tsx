import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { AxiosError, isAxiosError } from 'axios';

type ErrorProps = ComponentPropsWithoutRef<'p'> & {
  error: Error | AxiosError;
};

const ErrorMessage = ({ error, className }: ErrorProps) => {
  const errorMessage = isAxiosError(error)
    ? (error.response?.data?.message as string) || error.message
    : error.message;

  return (
    <p
      className={clsx(
        'text-danger text-sm text-600 text-center mt-0',
        className
      )}
    >
      {errorMessage}
    </p>
  );
};

export default ErrorMessage;
