import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import IconProps from "@/interfaces/Icon";

const MyIcon = ({ name }: IconProps) => {
    switch (name) {
        case "home":
            return <HomeIcon />;
        case "project":
            return <AppsIcon />;
        case "work":
            return <WorkIcon />;
        case "contact":
            return <CallIcon />;
        case "email":
            return <EmailIcon />;
        case "github":
            return <GitHubIcon />;
        case "linkedin":
            return <LinkedInIcon />;
        default:
            return null;
    }
}

export default MyIcon;