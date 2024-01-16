
import { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonThemeProvider = ({ Children }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {Children}
    </SkeletonTheme>
  );
};

export default SkeletonThemeProvider;
