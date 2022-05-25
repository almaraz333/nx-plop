import { Test1Props } from './types';

export const Test1: React.FC<Test1Props> = () => {
  return (
    <>
      Test1
      <input type="text" onChange={() => console.log('yo sd')} />
    </>
  );
};
