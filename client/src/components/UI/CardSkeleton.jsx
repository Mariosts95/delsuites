// @Material UI
import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = () => {
  return (
    <>
      <Skeleton variant='rectangular' animation='wave' sx={{ pt: '56.25%' }} />
      <Skeleton variant='text' animation='wave' height={60} />
      <Skeleton variant='text' animation='wave' />
      <Skeleton variant='text' animation='wave' height={120} />
    </>
  );
};

export default CardSkeleton;
