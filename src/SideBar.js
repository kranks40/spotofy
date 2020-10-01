import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function SideBar() {
    const [{ playlist}, dispatch] = useDataLayerValue();
    return (
        <div className='sideBar'>
            <img
            className='sidebar__logo'
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />

            <SideBarOption Icon={HomeIcon} title='Home' />
            <SideBarOption Icon={SearchIcon} title='Search' />
            <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />

            <br></br>
            <strong className="sidebar__title">PlayList</strong>
            <hr></hr>

            {playlist?.items?.map(playlist => (
                <SideBarOption title={playlist.name} />
            ))}
            </div>
    )
}

export default SideBar;
