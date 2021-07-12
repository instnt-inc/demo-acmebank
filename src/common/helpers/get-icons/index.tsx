import { Icons } from "common/enums/icons";
import ClearIcon from "@material-ui/icons/Clear";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const getIcon = (icon: string, iconStyles?: object): JSX.Element => {
  switch (icon) {
    case Icons.YOUTUBE:
      return <YouTubeIcon style={iconStyles} />;
    case Icons.FACEBOOK:
      return <FacebookIcon style={iconStyles} />;
    case Icons.TWITTER:
      return <TwitterIcon style={iconStyles} />;
    case Icons.INSTAGRAM:
      return <InstagramIcon style={iconStyles} />;
  }
  return <ClearIcon />;
};

export { getIcon };
