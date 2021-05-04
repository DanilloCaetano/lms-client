import React, { useEffect, useState } from 'react';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import cs from 'classnames';
import cleanHtml from 'utils/cleanHtml';
import classes from './MenuListContent.module.scss';

const MenuListItem = ({ className = '', ...props }) => (
  <ListItem
    {...props}
    className={cs([classes.menuListItem, className])}
    component='li'
    role='listitem'
  />
);

const id = `browse-catalog-dropdown--${Math.random()}`;
const MENU_ITEM_MIN_HEIGHT = 60;

interface MenuListProps {
  itemsTree?: any;
  header?: any;
}

const MenuListContent: React.FC<MenuListProps> = React.forwardRef<HTMLDivElement, MenuListProps>(
  ({ itemsTree, header }, ref) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [selectedItem, setSelectedItem] = useState<any>();
    const [menuHeight, setMenuHeight] = useState(itemsTree.length * MENU_ITEM_MIN_HEIGHT);
    const dropdown = document.getElementById(id);

    useEffect(() => {
      if (dropdown && !menuHeight) {
        setMenuHeight(dropdown.offsetHeight);
      }
    }, [dropdown, menuHeight]);

    const calcHeight = el => {
      setMenuHeight(el.offsetHeight);
    };

    return (
      <div id={id} style={{ height: menuHeight }} className={classes.dropdown} ref={ref}>
        <div className={classes.menuPrimary}>
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            unmountOnExit
            onEnter={calcHeight}
            classNames={{
              ...classes,
            }}
          >
            <div className={classes.menuList}>
              {header}
              <List>
                {itemsTree.map(item => (
                  <MenuListItem
                    button
                    key={item.title}
                    onClick={() => {
                      setActiveMenu(item.name);
                      setSelectedItem(item);
                    }}
                  >
                    <ListItemText primary={item.title} />
                    <FontAwesomeIcon icon={faAngleRight} />
                  </MenuListItem>
                ))}
              </List>
            </div>
          </CSSTransition>
        </div>

        <div className={classes.menuSecondary}>
          <CSSTransition
            in={activeMenu === selectedItem?.name}
            timeout={500}
            onEnter={calcHeight}
            unmountOnExit
            classNames={{ ...classes }}
            onExited={() => {
              setSelectedItem(null);
            }}
          >
            <>
              {itemsTree[selectedItem?.id] && (
                <List
                  classes={{
                    root: classes.menuList,
                  }}
                >
                  <MenuListItem
                    button
                    className={classes.menuListItemIcon}
                    onClick={() => {
                      setActiveMenu('main');
                    }}
                  >
                    <ListItemIcon classes={{ root: classes.backIcon }}>
                      <FontAwesomeIcon icon={faAngleLeft} size='2x' />
                    </ListItemIcon>
                    <ListItemText>
                      <span className={classes.backButton}>
                        {itemsTree[selectedItem?.id].title}
                      </span>
                    </ListItemText>
                  </MenuListItem>
                  {itemsTree[selectedItem?.id].children.map(child =>
                    child.to ? (
                      <MenuListItem
                        button
                        key={child.title}
                        className={cs([classes.listItemLink, classes.menuListItemWrapper])}
                      >
                        <a href={child.to} target='_blank' rel='noopener noreferrer'>
                          <ListItemText className={classes.listItemLinkText}>
                            {cleanHtml(child.title)}
                          </ListItemText>
                        </a>
                      </MenuListItem>
                    ) : (
                      <MenuListItem button key={child.title}>
                        <ListItemText>{cleanHtml(child.title)}</ListItemText>
                      </MenuListItem>
                    ),
                  )}
                </List>
              )}
            </>
          </CSSTransition>
        </div>
      </div>
    );
  },
);

export default MenuListContent;
