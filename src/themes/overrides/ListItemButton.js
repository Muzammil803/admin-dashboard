// ==============================|| OVERRIDES - LIST ITEM BUTTON ||============================== //

export default function ListItemButton(theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
          borderRadius: 8,
          marginTop: 2,
          marginBottom: 2,
          '&.Mui-selected': {
            color: "#fcb527",
            '& .MuiListItemIcon-root': {
              color: "#fcb527"
            }
          }
        }
      }
    }
  };
}
