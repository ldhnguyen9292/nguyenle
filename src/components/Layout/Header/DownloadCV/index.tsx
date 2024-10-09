import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';

import { Button, Text } from '@/components/Elements';

const ITEMS = [
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Fullstack Developer' },
];

const DownloadCV: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadCV = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event.currentTarget.innerText);
    handleClose();
  };

  return (
    <>
      <Button id="download-cv" onClick={handleClick} className="bg-tertiary-0 rounded-md px-2 py-1">
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={6}>
          <Text font="heading" className="text-sm">
            Download CV
          </Text>
          <ArrowDropDownIcon className="text-primary" />
        </Stack>
      </Button>
      <Menu id="download-cv-menu" open={open} onClose={handleClose} anchorEl={anchorEl}>
        {ITEMS.map((item) => (
          <MenuItem key={item.value} onClick={downloadCV}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DownloadCV;
