import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function SideBar() {
    const [{ playlists}, dispatch] = useDataLayerValue();

    dispatch({
        type: null,
    })


    return (
        <div className='sidebar'>
            <img
            className='sidebar__logo'
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />

            <SideBarOption Icon={HomeIcon} option='Home' />
            <SideBarOption Icon={SearchIcon} option='Search' />
            <SideBarOption Icon={LibraryMusicIcon} option='Your Library' />

            <br></br>
            <strong className="sidebar__title">PlayList</strong>
            <hr></hr>

            {playlists?.items?.map((playlist) => (
                <SideBarOption option={playlist.name} />
            ))}
            </div>
    )
}

export default SideBar;
