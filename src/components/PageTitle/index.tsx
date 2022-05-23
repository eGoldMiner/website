import React, { useEffect, memo } from 'react';

// const withPageTitle = (title: string, Component: React.ComponentType) => () => {
//   const Memoized = memo(Component);
const withPageTitle = (title: string, Component: React.ComponentType) => () => {
  const Memoized = memo(Component);

  useEffect(() => {
    document.title = 'Elrond Miners';
  }, []);
  return <Memoized />;
};

export default withPageTitle;
