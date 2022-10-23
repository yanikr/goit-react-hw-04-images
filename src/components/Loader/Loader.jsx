import { MutatingDots } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export const Loader = () => {
  return (
    <Div>
      <MutatingDots
        height="100"
        width="100"
        color="red"
        ariaLabel="loading"
        timeout={3000}
      />
    </Div>
  );
};
