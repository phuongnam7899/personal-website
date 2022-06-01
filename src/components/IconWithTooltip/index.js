import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import './index.scss';

const icons = {
  question: <i class="fas fa-question-circle"></i>,
};

export const IconWithTooltip = ({ icon, tooltipContent }) => {
  const displayIcon = icons[icon];
  return (
    <Tooltip placement="top" arrow title={tooltipContent}>
      <IconButton className="icon-btn-with-tooltip">{displayIcon}</IconButton>
    </Tooltip>
  );
};
