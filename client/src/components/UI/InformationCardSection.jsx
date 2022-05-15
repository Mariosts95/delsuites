import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Link';
import Box from '@mui/material/Box';

const InformationCardSection = ({ title, items, type }) => {
  return (
    <>
      <Typography gutterBottom variant='body1' component='p'>
        {title}
      </Typography>
      <List>
        {items.map((item) => (
          <Box key={item}>
            <ListItem>
              <Link
                href={type === 'mailto' ? `mailto:${item}` : `tel:${item}`}
                sx={{ color: 'primary.contrastText' }}
              >
                {item}
              </Link>
            </ListItem>
            <Divider></Divider>
          </Box>
        ))}
      </List>
    </>
  );
};

export default InformationCardSection;
