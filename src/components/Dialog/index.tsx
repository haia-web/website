import { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';

interface DialogProps {
  children: React.ReactNode;
  delegate?: any;
  options?: any;
}

export const Dialog = ({ delegate, children, options }: DialogProps) => {
  const delegateP = delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = options || {};

    NativeFancybox.bind(delegateP, opts);

    return () => {
      NativeFancybox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
};
