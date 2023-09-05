import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';

export const eventTypes = {
  formatUndo: 'formatUndo',
  formatRedo: 'formatRedo',
  formatBold: 'formatBold',
  formatItalic: 'formatItalic',
  formatUnderline: 'formatUnderline',
  formatAlignLeft: 'formatAlignLeft',
  formatAlignCenter: 'formatAlignCenter',
  formatAlignRight: 'formatAlignRight',
};

const iconsList = [
  {
    id: 1,
    Icon: UndoOutlinedIcon,
    event: eventTypes.formatUndo,
  },
  {
    id: 2,
    Icon: RedoOutlinedIcon,
    event: eventTypes.formatRedo,
  },
  {
    id: 3,
    Icon: FormatBoldOutlinedIcon,
    event: eventTypes.formatBold,
  },
  {
    id: 4,
    Icon: FormatItalicOutlinedIcon,
    event: eventTypes.formatItalic,
  },
  {
    id: 5,
    Icon: FormatUnderlinedOutlinedIcon,
    event: eventTypes.formatUnderline,
  },
  {
    id: 6,
    Icon: FormatAlignLeftOutlinedIcon,
    event: eventTypes.formatAlignLeft,
  },

  {
    id: 7,
    Icon: FormatAlignJustifyOutlinedIcon,
    event: eventTypes.formatAlignCenter,
  },
  {
    id: 8,
    Icon: FormatAlignRightOutlinedIcon,
    event: eventTypes.formatAlignRight,
  },
];

export default iconsList;
