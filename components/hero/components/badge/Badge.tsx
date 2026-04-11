import { BadgeProps } from './Badge.types';

const Badge: React.FC<BadgeProps> = ({ label, amount }) => {
  return (
    <div className="w-50 h-50 rounded-4xl bg-surface-elevated">
      <p className=" text-brand text-7xl pt-5">{amount}</p>
      <p className="text-text pt-5 text-2xl">{label}</p>
    </div>
  );
};

export default Badge;
