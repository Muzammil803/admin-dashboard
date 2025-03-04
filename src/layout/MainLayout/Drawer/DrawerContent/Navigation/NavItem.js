import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project-imports
import { dispatch, useSelector } from 'store';
import { activeItem, openDrawer } from 'store/reducers/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { drawerOpen, openItem } = useSelector((state) => state.menu);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link {...props} to={item.url} target={itemTarget} ref={ref} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }
  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon variant="Bulk" size={drawerOpen ? 20 : 22} /> : false;

  const { pathname } = useLocation();

  // active menu item on page load
  useEffect(() => {
    if (pathname === item.url) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = 'sicpa.main';
  const iconSelectedColor = 'sicpa.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 20}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: '#fcb52736'
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: '#fcb52736'
            },
            bgcolor: '#fcb52736'
          }
        }),
        ...(drawerOpen &&
          level === 1 && {
            mx: 1.25,
            my: 0.5,
            borderRadius: 1,
            '&:hover': {
              bgcolor: '#fcb52736'
            },
            '&.Mui-selected': {
              color: iconSelectedColor,
              '&:hover': {
                color: iconSelectedColor
              }
            }
          }),
        ...(!drawerOpen && {
          px: 2.75,
          '&:hover': {
            bgcolor: '#fcb52736'
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: '#fcb52736'
            },
            bgcolor: '#fcb52736'
          }
        })
      }}
      {...(downLG && {
        onClick: () => dispatch(openDrawer(false))
      })}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 38,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen &&
              level === 1 && {
                borderRadius: 1,
                width: 46,
                height: 46,
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: '#fcb52736'
                }
              }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor: '#fcb52736',
                '&:hover': {
                  bgcolor: '#fcb52736'
                }
              })
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}

      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor, fontWeight: isSelected ? 500 : 400 }}>
              {item.title}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  target: PropTypes.object,
  url: PropTypes.string,
  id: PropTypes.object,
  disabled: PropTypes.bool,
  chip: PropTypes.object,
  variant: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.object,
  label: PropTypes.string
};

export default NavItem;