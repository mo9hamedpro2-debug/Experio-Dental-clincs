import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'teal' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  title,
  icon,
  iconPosition = 'left',
  target,
  rel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#147D83] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-lg gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#102A43] text-white hover:bg-[#0B1D2E] active:scale-[0.99] shadow-sm',
    teal:
      'bg-[#147D83] text-white hover:bg-[#0E6166] active:scale-[0.99] shadow-sm',
    secondary:
      'bg-[#EAF4F3] text-[#147D83] hover:bg-[#d6eae8] active:scale-[0.99] font-semibold',
    outline:
      'border border-[#102A43]/20 text-[#102A43] hover:bg-black/5 active:scale-[0.99]',
    ghost:
      'text-[#102A43] hover:bg-[#102A43]/5 active:bg-[#102A43]/10',
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} title={title} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        title={title}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};
