import { FC } from 'react';
import { DividerStyles } from './Divider.styles';

const Divider: FC<{ className?: string }> = ({ className }) => {
  return <DividerStyles.Divider className={className} />;
};

export default Divider;
