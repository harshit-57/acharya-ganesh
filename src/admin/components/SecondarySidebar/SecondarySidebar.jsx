import { MatxLayoutSettings as settings } from '../MatxLayout/settings';
import SecondarySidenavTheme from '../MatxTheme/SecondarySidenavTheme/SecondarySidenavTheme';
import SecondarySidebarContent from './SecondarySidebarContent';
import SecondarySidebarToggle from './SecondarySidebarToggle';

const SecondarySidebar = () => {
    const secondarySidebarTheme =
        settings.themes[settings.secondarySidebar.theme];

    return (
        <SecondarySidenavTheme theme={secondarySidebarTheme}>
            {settings.secondarySidebar.open && <SecondarySidebarContent />}
            <SecondarySidebarToggle />
        </SecondarySidenavTheme>
    );
};

export default SecondarySidebar;
