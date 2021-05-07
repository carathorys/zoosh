import { WithStyles } from "@material-ui/core";
import { HeaderStyles } from "./header.styles";

import {Route} from "../../models";

export interface HeaderProps extends WithStyles<typeof HeaderStyles>
{
    title: string;
    darkMode?: boolean;
    toggleDarkMode?: () => void;
    onTabChange?: (url: string) => void;
    currentPath?: string;
    tabs?: Route[];
}