import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';


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
        default:
            return null;
    }
}

export default MyIcon;