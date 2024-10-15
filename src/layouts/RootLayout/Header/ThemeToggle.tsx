import React from 'react';

import { Emoji } from 'src/components/Emoji';
import useScheme from 'src/hooks/useScheme';

type Props = {};

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme();

  const handleClick = () => {
    setScheme(scheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Emoji>{scheme === 'light' ? '☀️' : '🌙'}</Emoji>
    </div>
  );
};

export default ThemeToggle;
