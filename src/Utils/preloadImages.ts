import HomeIcon from 'Assets/home-icon.svg';
import SearchIcon from 'Assets/search-icon.svg';
import WeeklyIcon from 'Assets/weekly-icon.svg';
import SettingIcon from 'Assets/setting-icon.svg';
import HomeIcon_Fill from 'Assets/home-fill-icon.svg';
import SearchIcon_Fill from 'Assets/search-fill-icon.svg';
import WeeklyIcon_Fill from 'Assets/weekly-fill-icon.svg';
import SettingIcon_Fill from 'Assets/setting-fill-icon.svg';

export const preloadImages = () => {
  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const imageSources = [
  HomeIcon_Fill,
  SearchIcon_Fill,
  WeeklyIcon_Fill,
  SettingIcon_Fill,
  HomeIcon,
  SearchIcon,
  WeeklyIcon,
  SettingIcon,
];
