//import { menuItems } from '../../menuItems2';
import localStoreHandler from '../../common/LocalStoreHandler';
import MenuItems from './MenuItems';

const Navbar = () => {
    const menuItems = localStoreHandler.getMenu();

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
